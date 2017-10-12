package com.b2beyond.wallet.b2bcoin.daemon.rpc;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;


public class JsonRpcExecutor<T> {

    private Logger LOGGER = Logger.getLogger(this.getClass());

    private String baseUrl;
    private String method;
    private Class<T> returnClass;

    public static final String EMPTY_PARAMS = "\"params\": {}";

    public JsonRpcExecutor(String baseUrl, String method, Class<T> genericTypeClass) {
        this.baseUrl = baseUrl;
        this.method = method;
        this.returnClass = genericTypeClass;

        LOGGER.info("JsonRpcExecutor created for baseUrl : '" + baseUrl + "' and method : '" + method + "'");
    }

    public synchronized T execute(String params) {
        T result = null;
        HttpURLConnection httpConnection = null;

        try {
            try {
                final URL url = new URL(baseUrl);
                httpConnection = (HttpURLConnection) ((url.openConnection()));
                httpConnection.setDoOutput(true);
                httpConnection.setRequestProperty("Content-Type", "application/json");
                httpConnection.setRequestProperty("Accept", "application/json");
                httpConnection.setRequestMethod("POST");
                httpConnection.setReadTimeout(60000);
                httpConnection.connect();

                String data = "{ \"jsonrpc\":\"2.0\", \"id\":\"test\", \"method\":\"" + method + "\"," + params + "}";
                LOGGER.debug("Execute method : '" + method + "' : with execute params : " + data);

                byte[] outputBytes = data.getBytes("UTF-8");
                OutputStream os = httpConnection.getOutputStream();
                os.write(outputBytes);

                LOGGER.debug("Execute method : '" + method + "' : response code : " + httpConnection.getResponseCode());

                BufferedReader in = new BufferedReader(new InputStreamReader(httpConnection.getInputStream()));
                StringBuilder builder = new StringBuilder();
                String line;
                while((line = in.readLine()) != null && !"".equalsIgnoreCase(line)) {
                    builder.append(line);
                }

                // Parsing the json !! Trying not to return null !!
                LOGGER.trace("Execute method : '" + method + "' : parse JSON : " + builder.toString());
                Gson gson = new Gson();
                String response = builder.toString();
                LOGGER.trace("Execute method : '" + method + "' : response : " + response);

                if (StringUtils.isNotBlank(response)) {
                    JsonElement element = new JsonParser().parse(builder.toString());

                    result = gson.fromJson(element.getAsJsonObject().get("result").toString(), returnClass);
                } else {
                    result = gson.fromJson("{}", returnClass);
                }

                os.close();
                httpConnection.disconnect();
            } catch (IOException e) {
                LOGGER.error("JSon Rcp Executor failed : " + e.getMessage());
            }
        } catch (Exception e) {
            LOGGER.error("Json Rcp Executor failed : " + e.getMessage());
            if (httpConnection != null) {
                httpConnection.disconnect();
            }
        }

        return result;
    }

}
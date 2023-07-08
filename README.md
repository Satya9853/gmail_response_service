# gmail_response_service
*Endpoint* -> http://localhost:$PORT/gmail/service

## Requirement
Should Have gmail Api enabaled and should provide the credentals file in the root folder.

## Packages Used
*express* -> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
</br>
</br>
*@google-cloud/local-auth* -> This library is meant to demonstrate authentication for sample purposes; it should be treated as a starting point for building an application, and is not a general purpose solution,
</br>
</br>
dotenv -> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env,
</br>
</br>
googleapis -> Node.js client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included.
</br>
</br>
path -> The node:path module provides utilities for working with file and directory paths.

## Gmail Api
To call this service, we recommend that you use the Google-provided client libraries. If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
</br>
</br>
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
</br>
</br>
https://gmail.googleapis.com

*Documentation can be found on* https://developers.google.com/gmail/api/reference/rest

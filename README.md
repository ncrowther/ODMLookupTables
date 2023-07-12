# IBM ODM App

This simple ODM Project contains lookup tables and a React web UI enables you to execte ODM lookup decision services.

## To Install

1. Build  the ODM Lookup_table_service and deploy to your RES

2. Update your server.xml to permit CORS.  For Liberty on localhost, add the following line to the end of your server.xml (C:\WebsphereLiberty\wlp\usr\servers\odm81020):
```
<cors domain="/DecisionService/rest/v1/Utilities/1.0/LookupTable" allowedOrigins="http://localhost:3501" allowedMethods="GET, POST" allowedHeaders="*"/>
``` 

2. From the LookupUI folder run:

### `npm install`

Once all the dependancies have been download you can start this react app locally by running:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3501](http://localhost:3501) to view it in your browser.


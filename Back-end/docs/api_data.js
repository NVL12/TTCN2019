define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "input is something like this (in body)",
          "content": "{\n\t\"access_token\": \"masterKey\",\n\t\"role\": \"admin\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of user that log in to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjc4N30.yb4SUMM_ERJLNIRZamc-Ra6Cw_i1X2h5A0EMcRkErP4\",\n    \"user\": {\n        \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n        \"name\": \"huy ho\",\n        \"email\": \"admin@gmail.com\",\n        \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only or invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/components",
    "title": "Create component",
    "name": "CreateComponent",
    "group": "Component",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the component.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>This is the body of the component.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "images",
            "description": "<p>List <code>ID</code> of the Image object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "input is something like this:",
          "content": "{\n\t\"title\": \"Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi\",\n\t\"description\": \"Đà nẵng là một thành phố đáng sống nhất VN\",\n\t\"images\": [\"5dcecdde82b14a2db0aca8e9\", \"5dcece8b6e539a1368c7d6f8\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "component",
            "description": "<p>Component's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dced0838284f12da4559d6e\",\n    \"title\": \"Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi\",\n    \"description\": \"Đà nẵng là một thành phố đáng sống nhất VN\",\n    \"images\": [\n        \"5dcecdde82b14a2db0aca8e9\",\n        \"5dcece8b6e539a1368c7d6f8\"\n    ],\n    \"createdAt\": \"2019-11-15T16:21:23.622Z\",\n    \"updatedAt\": \"2019-11-15T16:21:23.622Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Component not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/component/index.js",
    "groupTitle": "Component"
  },
  {
    "type": "delete",
    "url": "/components/:id",
    "title": "Delete component",
    "name": "DeleteComponent",
    "group": "Component",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Component not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/component/index.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components/:id",
    "title": "Retrieve component",
    "name": "RetrieveComponent",
    "group": "Component",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "component",
            "description": "<p>Component's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dced0838284f12da4559d6e\",\n    \"title\": \"Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi\",\n    \"description\": \"Đà nẵng là một thành phố đáng sống nhất VN\",\n    \"images\": [\n        {\n            \"keywords\": [\n                \"710894 jpg\"\n            ],\n            \"originalname\": \"710894.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834206556-710894.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n            \"size\": 3347409,\n            \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n            \"updatedAt\": \"2019-11-15T16:10:06.659Z\",\n            \"__v\": 0,\n            \"id\": \"5dcecdde82b14a2db0aca8e9\"\n        },\n        {\n            \"keywords\": [\n                \"hinh 1 jpg\"\n            ],\n            \"originalname\": \"Hinh1.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834379787-Hinh1.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834379787-Hinh1.jpg\",\n            \"size\": 17355,\n            \"createdAt\": \"2019-11-15T16:12:59.816Z\",\n            \"updatedAt\": \"2019-11-15T16:12:59.816Z\",\n            \"__v\": 0,\n            \"id\": \"5dcece8b6e539a1368c7d6f8\"\n        }\n    ],\n    \"createdAt\": \"2019-11-15T16:21:23.622Z\",\n    \"updatedAt\": \"2019-11-15T16:21:23.622Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Component not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/component/index.js",
    "groupTitle": "Component"
  },
  {
    "type": "get",
    "url": "/components",
    "title": "Retrieve components",
    "name": "RetrieveComponents",
    "group": "Component",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "components",
            "description": "<p>List of components.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"results\": [\n        {\n            \"id\": \"5dced0838284f12da4559d6e\",\n            \"title\": \"Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi\",\n            \"description\": \"Đà nẵng là một thành phố đáng sống nhất VN\",\n            \"images\": [\n                {\n                    \"keywords\": [\n                        \"710894 jpg\"\n                    ],\n                    \"originalname\": \"710894.jpg\",\n                    \"encoding\": \"7bit\",\n                    \"mimetype\": \"image/jpeg\",\n                    \"destination\": \"./src/uploads\",\n                    \"filename\": \"1573834206556-710894.jpg\",\n                    \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n                    \"size\": 3347409,\n                    \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n                    \"updatedAt\": \"2019-11-15T16:10:06.659Z\",\n                    \"__v\": 0,\n                    \"id\": \"5dcecdde82b14a2db0aca8e9\"\n                },\n                {\n                    \"keywords\": [\n                        \"hinh 1 jpg\"\n                    ],\n                    \"originalname\": \"Hinh1.jpg\",\n                    \"encoding\": \"7bit\",\n                    \"mimetype\": \"image/jpeg\",\n                    \"destination\": \"./src/uploads\",\n                    \"filename\": \"1573834379787-Hinh1.jpg\",\n                    \"path\": \"src\\\\uploads\\\\1573834379787-Hinh1.jpg\",\n                    \"size\": 17355,\n                    \"createdAt\": \"2019-11-15T16:12:59.816Z\",\n                    \"updatedAt\": \"2019-11-15T16:12:59.816Z\",\n                    \"__v\": 0,\n                    \"id\": \"5dcece8b6e539a1368c7d6f8\"\n                }\n            ],\n            \"createdAt\": \"2019-11-15T16:21:23.622Z\",\n            \"updatedAt\": \"2019-11-15T16:21:23.622Z\"\n        }\n    ],\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/component/index.js",
    "groupTitle": "Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/components/:id",
    "title": "Update component",
    "name": "UpdateComponent",
    "group": "Component",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "component",
            "description": "<p>Component's component.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Component's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "component",
            "description": "<p>Component's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dced0838284f12da4559d6e\",\n    \"title\": \"Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi\",\n    \"description\": \"Đà nẵng là một thành phố đáng sống nhất VN\",\n    \"images\": [\n        {\n            \"keywords\": [\n                \"710894 jpg\"\n            ],\n            \"originalname\": \"710894.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834206556-710894.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n            \"size\": 3347409,\n            \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n            \"updatedAt\": \"2019-11-15T16:10:06.659Z\",\n            \"__v\": 0,\n            \"id\": \"5dcecdde82b14a2db0aca8e9\"\n        },\n        {\n            \"keywords\": [\n                \"hinh 1 jpg\"\n            ],\n            \"originalname\": \"Hinh1.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834379787-Hinh1.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834379787-Hinh1.jpg\",\n            \"size\": 17355,\n            \"createdAt\": \"2019-11-15T16:12:59.816Z\",\n            \"updatedAt\": \"2019-11-15T16:12:59.816Z\",\n            \"__v\": 0,\n            \"id\": \"5dcece8b6e539a1368c7d6f8\"\n        }\n    ],\n    \"createdAt\": \"2019-11-15T16:21:23.622Z\",\n    \"updatedAt\": \"2019-11-15T16:21:23.622Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Component not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/component/index.js",
    "groupTitle": "Component"
  },
  {
    "type": "post",
    "url": "/images",
    "title": "Create image",
    "name": "CreateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "that",
            "description": "<p>is a file in <code>form-data</code> matched <code>.png</code> or <code>.jgp</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Image's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcecdde82b14a2db0aca8e9\",\n    \"originalname\": \"710894.jpg\",\n    \"encoding\": \"7bit\",\n    \"mimetype\": \"image/jpeg\",\n    \"destination\": \"./src/uploads\",\n    \"filename\": \"1573834206556-710894.jpg\",\n    \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n    \"size\": 3347409,\n    \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n    \"updatedAt\": \"2019-11-15T16:10:06.659Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Image not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/index.js",
    "groupTitle": "Image"
  },
  {
    "type": "delete",
    "url": "/images/:id",
    "title": "Delete image",
    "name": "DeleteImage",
    "group": "Image",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Image not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/index.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/images/:id",
    "title": "Retrieve image",
    "name": "RetrieveImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Image's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcecdde82b14a2db0aca8e9\",\n    \"originalname\": \"710894.jpg\",\n    \"encoding\": \"7bit\",\n    \"mimetype\": \"image/jpeg\",\n    \"destination\": \"./src/uploads\",\n    \"filename\": \"1573834206556-710894.jpg\",\n    \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n    \"size\": 3347409,\n    \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n    \"updatedAt\": \"2019-11-15T16:10:06.659Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Image not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/index.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/images",
    "title": "Retrieve images",
    "name": "RetrieveImages",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>List of images.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"results\": [\n        {\n            \"id\": \"5dcece8b6e539a1368c7d6f8\",\n            \"originalname\": \"Hinh1.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834379787-Hinh1.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834379787-Hinh1.jpg\",\n            \"size\": 17355,\n            \"createdAt\": \"2019-11-15T16:12:59.816Z\",\n            \"updatedAt\": \"2019-11-15T16:12:59.816Z\"\n        },\n        {\n            \"id\": \"5dcecdde82b14a2db0aca8e9\",\n            \"originalname\": \"710894.jpg\",\n            \"encoding\": \"7bit\",\n            \"mimetype\": \"image/jpeg\",\n            \"destination\": \"./src/uploads\",\n            \"filename\": \"1573834206556-710894.jpg\",\n            \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n            \"size\": 3347409,\n            \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n            \"updatedAt\": \"2019-11-15T16:10:06.659Z\"\n        }\n    ],\n    \"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/index.js",
    "groupTitle": "Image",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/images/:id",
    "title": "Update image",
    "name": "UpdateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Baerer Auth with the token user</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "originalname",
            "description": "<p>Image's originalname.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "encoding",
            "description": "<p>Image's encoding.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "mimetype",
            "description": "<p>Image's mimetype.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "destination",
            "description": "<p>Image's destination.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "filename",
            "description": "<p>Image's filename.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "path",
            "description": "<p>Image's path.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "size",
            "description": "<p>Image's size.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image",
            "description": "<p>Image's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcecdde82b14a2db0aca8e9\",\n    \"originalname\": \"710894.jpg\",\n    \"encoding\": \"7bit\",\n    \"mimetype\": \"image/jpeg\",\n    \"destination\": \"./src/uploads\",\n    \"filename\": \"1573834206556-710894.jpg\",\n    \"path\": \"src\\\\uploads\\\\1573834206556-710894.jpg\",\n    \"size\": 3347409,\n    \"createdAt\": \"2019-11-15T16:10:06.659Z\",\n    \"updatedAt\": \"2019-11-15T16:10:06.659Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Image not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/image/index.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "input is something like this:",
          "content": "{\n\t\"access_token\": \"masterKey\",\n    \"email\": \"admin@gmail.com\",\n    \"password\": \"123456\",\n    \"name\": \"huy ho\",\n    \"role\": \"admin\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>This is an <code>ID</code> of the Image object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User's role.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": ": response is something like this:",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjQ0NX0.v6Qu-mYtLBF11Y7l8WnE905vxuwAen8PicytuiX9lOA\",\n    \"user\": {\n        \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n        \"name\": \"huy ho\",\n        \"email\": \"admin@gmail.com\",\n        \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Retrieve current user",
    "name": "RetrieveCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n    \"name\": \"huy ho\",\n    \"email\": \"admin@gmail.com\",\n    \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Retrieve user",
    "name": "RetrieveUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n    \"name\": \"huy ho\",\n    \"email\": \"admin@gmail.com\",\n    \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve users",
    "name": "RetrieveUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer authorization with access_token after logging.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token (using Bearer header or using this in body).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"results\": [\n        {\n            \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n            \"name\": \"huy ho\",\n            \"email\": \"admin@gmail.com\",\n            \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n        },\n        {\n            \"id\": \"5db7121b9ac36d49508179e3\",\n            \"name\": \"huy ho\",\n            \"email\": \"user@gmail.com\",\n            \"createdAt\": \"2019-10-28T16:06:51.828Z\"\n        }\n    ],\n    \"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id/password",
    "title": "Update password",
    "name": "UpdatePassword",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response is something like this:",
          "content": "{\n    \"id\": \"5dcec6fd0c84021da4a2ecc9\",\n    \"name\": \"huy ho\",\n    \"email\": \"admin@gmail.com\",\n    \"createdAt\": \"2019-11-15T15:40:45.055Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  }
] });

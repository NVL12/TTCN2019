# blogs-backend v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Component](#component)
	- [Create component](#create-component)
	- [Delete component](#delete-component)
	- [Retrieve component](#retrieve-component)
	- [Retrieve components](#retrieve-components)
	- [Update component](#update-component)
	
- [Image](#image)
	- [Create image](#create-image)
	- [Delete image](#delete-image)
	- [Retrieve image](#retrieve-image)
	- [Retrieve images](#retrieve-images)
	- [Update image](#update-image)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| role			| String			|  <p>The role of user that log in to.</p>							|

### Success Response

response is something like this:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjc4N30.yb4SUMM_ERJLNIRZamc-Ra6Cw_i1X2h5A0EMcRkErP4",
    "user": {
        "id": "5dcec6fd0c84021da4a2ecc9",
        "name": "huy ho",
        "email": "admin@gmail.com",
        "createdAt": "2019-11-15T15:40:45.055Z"
    }
}
```
# Component

## Create component



	POST /components

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>The title of the component.</p>							|
| description			| 			|  <p>This is the body of the component.</p>							|
| images			| 			|  <p>List <code>ID</code> of the Image object.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        "5dcecdde82b14a2db0aca8e9",
        "5dcece8b6e539a1368c7d6f8"
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
```
## Delete component



	DELETE /components/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

## Retrieve component



	GET /components/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        {
            "keywords": [
                "710894 jpg"
            ],
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z",
            "__v": 0,
            "id": "5dcecdde82b14a2db0aca8e9"
        },
        {
            "keywords": [
                "hinh 1 jpg"
            ],
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z",
            "__v": 0,
            "id": "5dcece8b6e539a1368c7d6f8"
        }
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
```
## Retrieve components



	GET /components

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

### Success Response

response is something like this:

```
{
    "results": [
        {
            "id": "5dced0838284f12da4559d6e",
            "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
            "description": "Đà nẵng là một thành phố đáng sống nhất VN",
            "images": [
                {
                    "keywords": [
                        "710894 jpg"
                    ],
                    "originalname": "710894.jpg",
                    "encoding": "7bit",
                    "mimetype": "image/jpeg",
                    "destination": "./src/uploads",
                    "filename": "1573834206556-710894.jpg",
                    "path": "src\\uploads\\1573834206556-710894.jpg",
                    "size": 3347409,
                    "createdAt": "2019-11-15T16:10:06.659Z",
                    "updatedAt": "2019-11-15T16:10:06.659Z",
                    "__v": 0,
                    "id": "5dcecdde82b14a2db0aca8e9"
                },
                {
                    "keywords": [
                        "hinh 1 jpg"
                    ],
                    "originalname": "Hinh1.jpg",
                    "encoding": "7bit",
                    "mimetype": "image/jpeg",
                    "destination": "./src/uploads",
                    "filename": "1573834379787-Hinh1.jpg",
                    "path": "src\\uploads\\1573834379787-Hinh1.jpg",
                    "size": 17355,
                    "createdAt": "2019-11-15T16:12:59.816Z",
                    "updatedAt": "2019-11-15T16:12:59.816Z",
                    "__v": 0,
                    "id": "5dcece8b6e539a1368c7d6f8"
                }
            ],
            "createdAt": "2019-11-15T16:21:23.622Z",
            "updatedAt": "2019-11-15T16:21:23.622Z"
        }
    ],
    "count": 1
}
```
## Update component



	PUT /components/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| component			| 			|  <p>Component's component.</p>							|
| name			| 			|  <p>Component's name.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dced0838284f12da4559d6e",
    "title": "Đà nẵng đẹp lắm Sài Gòn ơi Sài Gòn ơi",
    "description": "Đà nẵng là một thành phố đáng sống nhất VN",
    "images": [
        {
            "keywords": [
                "710894 jpg"
            ],
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z",
            "__v": 0,
            "id": "5dcecdde82b14a2db0aca8e9"
        },
        {
            "keywords": [
                "hinh 1 jpg"
            ],
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z",
            "__v": 0,
            "id": "5dcece8b6e539a1368c7d6f8"
        }
    ],
    "createdAt": "2019-11-15T16:21:23.622Z",
    "updatedAt": "2019-11-15T16:21:23.622Z"
}
```
# Image

## Create image



	POST /images

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| that			| File			|  <p>is a file in <code>form-data</code> matched <code>.png</code> or <code>.jgp</code></p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
```
## Delete image



	DELETE /images/:id


## Retrieve image



	GET /images/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
```
## Retrieve images



	GET /images

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

### Success Response

response is something like this:

```
{
    "results": [
        {
            "id": "5dcece8b6e539a1368c7d6f8",
            "originalname": "Hinh1.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834379787-Hinh1.jpg",
            "path": "src\\uploads\\1573834379787-Hinh1.jpg",
            "size": 17355,
            "createdAt": "2019-11-15T16:12:59.816Z",
            "updatedAt": "2019-11-15T16:12:59.816Z"
        },
        {
            "id": "5dcecdde82b14a2db0aca8e9",
            "originalname": "710894.jpg",
            "encoding": "7bit",
            "mimetype": "image/jpeg",
            "destination": "./src/uploads",
            "filename": "1573834206556-710894.jpg",
            "path": "src\\uploads\\1573834206556-710894.jpg",
            "size": 3347409,
            "createdAt": "2019-11-15T16:10:06.659Z",
            "updatedAt": "2019-11-15T16:10:06.659Z"
        }
    ],
    "count": 2
}
```
## Update image



	PUT /images/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Baerer Auth with the token user</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| originalname			| 			|  <p>Image's originalname.</p>							|
| encoding			| 			|  <p>Image's encoding.</p>							|
| mimetype			| 			|  <p>Image's mimetype.</p>							|
| destination			| 			|  <p>Image's destination.</p>							|
| filename			| 			|  <p>Image's filename.</p>							|
| path			| 			|  <p>Image's path.</p>							|
| size			| 			|  <p>Image's size.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcecdde82b14a2db0aca8e9",
    "originalname": "710894.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./src/uploads",
    "filename": "1573834206556-710894.jpg",
    "path": "src\\uploads\\1573834206556-710894.jpg",
    "size": 3347409,
    "createdAt": "2019-11-15T16:10:06.659Z",
    "updatedAt": "2019-11-15T16:10:06.659Z"
}
```
# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>This is an <code>ID</code> of the Image object.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

### Success Response

: response is something like this:

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkY2VjNmZkMGM4NDAyMWRhNGEyZWNjOSIsImlhdCI6MTU3MzgzMjQ0NX0.v6Qu-mYtLBF11Y7l8WnE905vxuwAen8PicytuiX9lOA",
    "user": {
        "id": "5dcec6fd0c84021da4a2ecc9",
        "name": "huy ho",
        "email": "admin@gmail.com",
        "createdAt": "2019-11-15T15:40:45.055Z"
    }
}
```
## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
```
## Retrieve user



	GET /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
```
## Retrieve users



	GET /users

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Bearer authorization with access_token after logging.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token (using Bearer header or using this in body).</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

### Success Response

response is something like this:

```
{
    "results": [
        {
            "id": "5dcec6fd0c84021da4a2ecc9",
            "name": "huy ho",
            "email": "admin@gmail.com",
            "createdAt": "2019-11-15T15:40:45.055Z"
        },
        {
            "id": "5db7121b9ac36d49508179e3",
            "name": "huy ho",
            "email": "user@gmail.com",
            "createdAt": "2019-10-28T16:06:51.828Z"
        }
    ],
    "count": 2
}
```
## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|

### Success Response

response is something like this:

```
{
    "id": "5dcec6fd0c84021da4a2ecc9",
    "name": "huy ho",
    "email": "admin@gmail.com",
    "createdAt": "2019-11-15T15:40:45.055Z"
}
```


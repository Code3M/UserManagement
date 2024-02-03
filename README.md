# UserManagement

Create/Update/Delete/Get an user from the Users Table. Also to get a user by User ID.
```javascript
http://localhost:8099/api/users/register
http://localhost:8099/api/users/removeUser
http://localhost:8099/api/users/findUser/65be8768846ba85208069783
http://localhost:8099/api/users/updateUser/<_id>

```

Get a user by User ID with assigned role and nested resources.

```javascript
http://localhost:8099/api/users/findUserRoleandResource/<_id>
```

Create/Update/Delete a role from the Roles Table. On delete should also delete the corresponding Roles Resource Mappings.
```javascript
http://localhost:8099/api/role/createRole
http://localhost:8099/api/role/deleteRole
```
Create/Update/Delete a resource from the Resources Table. On Delete Resource should delete all mapped rows from the mapping table.
```javascript
http://localhost:8099/api/resource/createResource
http://localhost:8099/api/resource/deleteResource
```
Create an API to assign/map a resource with a role.
```javascript
http://localhost:8099/api/resourceMapping/mapResourceWithRole
```
Create an API to assign a role to a User.
```javascript
http://localhost:8099/api/resourceMapping/mapRolewithUser
```
Create an API to Update Role Resource Mapping Permission.
```javascript
http://localhost:8099/api/resourceMapping/updatePersmision
```
Create an API for User Authentication using JWT Token.
```javascript
http://localhost:8099/api/userValidation/validate
```

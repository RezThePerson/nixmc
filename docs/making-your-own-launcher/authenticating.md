# authenticating

## offline / cracked

1. get the username the user wants to use
2. do a MD5 hash of `OfflinePlayer:<username>`
3. format properly as UUID (`12345678-1234-1234-1234-123456789012`)
4. convert UUID to version 3
5. that is your `UUID`

## Official

### Microsoft OAuth

There are 2 ways to do this:

Device code



Microsoft Login

1. make the user open and login at 
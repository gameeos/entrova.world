# Details
`https://gameplus.ai/api/invitation/detail?pageSize=6&page=0`
```json
{
    "code": 1,
    "data": {
        "last": true,
        "list": [
            {
                "address": "0x8ef6B9657a9afc864D7FC8063ecDE32CBb635A38",
                "avatar": "https://s3.gameplus.ai/dragon/3.png",
                "buyTotal": 0.0,
                "inviteType": "Direct",
                "inviterAddress": "0x062d7d87d7cf4dfe21607aac86301fa17b21b8d5",
                "inviterName": "GP-N29QA5",
                "level": 1,
                "points": 0.0,
                "registerDate": 1730537028637,
                "taskComplete": false,
                "userName": "GP-DZV35C"
            }
        ],
        "page": 1,
        "paging": true,
        "total": 1,
        "totalPage": 1
    },
    "message": "api success!",
    "success": true
}
```

# Ranking
`https://gameplus.ai/api/invitation/rankings?pageSize=6&page=0`

```json
{
    "code": 1,
    "data": {
        "last": true,
        "list": [
            {
                "avatar": "https://s3.gameplus.ai/dragon/3.png",
                "invitations": 2,
                "points": 0.0,
                "ranking": 1,
                "userName": "GP-8CQ1R5"
            },
            {
                "avatar": "https://s3.gameplus.ai/dragon/2.png",
                "invitations": 1,
                "points": 0.0,
                "ranking": 2,
                "userName": "GP-N29QA5"
            }
        ],
        "page": 1,
        "paging": true,
        "total": 2,
        "totalPage": 1
    },
    "message": "api success!",
    "success": true
}
```

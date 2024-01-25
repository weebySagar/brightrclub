const newArrivalData =[
    {
        id:1,
        img:"https://s3-alpha-sig.figma.com/img/3744/8b17/61e03b7bb2882c162b4f7b72a6bb2d7e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqTG-q4aTXZkhLgSCzHFiNh~3lJ27yMyIVujm9TcQviksb60BjBKNn8HDdFlbxQdAUr0Gn0~JUrg-Ch9Cp8NJeqGUSTv88YMAFN3B1Zsq5eHcDsIw-wK336fkn2t~dN8-Kion1hDYb2-nSWKG1W0G04tkTPDMnhy05K4DlAzZCDhMH9Izl8izMU1E4x8yth0yKJn~ewf7UDpmUGcEKIComJA5wAUVj3azdNcVwlGvguLYejXJosU6sYzwWQnUpcJLC4Dob-uatLp8QBqINZ25OkdzpQcv~Xpv-WjxQDj8MzMrxpMWdJNbkY8viufrjb9yEhMKE3mor7jauIPB2J6Iw__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },
    {
        id:2,
        img:"https://s3-alpha-sig.figma.com/img/b67b/e17c/3e2164531ffc22f97c9c6bf9ab34ad95?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuwVcXQHsjz9lklH5DjI169yDUEbUov8MbhaumCU6G6Q46vf1aMSMiON7NGDZPjmNZ42ipQNBeIihvr74LrPiGGp1huQXtNWXG9odvN-aOTYFYO~nB~5AUex0SeNid3KbCSLljZ4lmM7aQUaIDEUdczz3qouFP70aPDfikktPSIsKuPSa8pTfRfgr5O7-PyLik0GswjvX7V7zKkVXcShyZ53cmHoTsUfkkfW-qLACtfN8IrZsubr7iJKWWh2CF4JpioLohIefmA3INXUaCwf~gHx5Zr6PnmwgYvzWpVB7tGdC0w3~a7W4e-2x83Gqlciv~ra7QQnh2nVMl03hcxsdA__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },
    {
        id:3,
        img:"https://s3-alpha-sig.figma.com/img/1e1e/fb63/a1de722df617be1af74bf26b36b59dd0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-sEP83~QzFs97WL3NkhZU8Ohgnf2dDq65iBKIeMniLm9xU2NXCL~2--Mi1JddoexUt9wMSAYGsbDghQdGbR5qto2PbRx-2PVvj-WxFAKccUWqUZdqayhy9GnXMe~tB2BNmovQQBQCOL6k0WccS51CeLh-IL-n~gAKrb6At8WtZV7aff3PvR1ftmysaG8r7Wup7hKvVPvajpDk7D2ij2WeV8-JE3srpwIXkMGmyydZa6s34vHKJdiWWE29NAgPDxvSYcK-Pujxtc3Z~vN~4QAa3~GY8GfHBAI9MajbXEtiqL2d60P7O0UKyv8lTd3Wlc0iJOYdgUrDPR-cVSjO2v0w__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },
    {
        id:4,
        img:"https://s3-alpha-sig.figma.com/img/f410/8bbd/fe41975d107a8fd58ef5936959e77f14?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eIeAcMVZVZm4N8gYDNSckelxuspeayG7mhGG9UEgnQ6BTdK3R-eg9Gjp9jV~5KPGOYOcPQXY~AzWO2OQeIWFvcDjja7hCvxViXcIbUmooxNKRFD0PobX8aFaQ~yNZeMfgUXh7E8JME3VPNvG68aiNDLTGw0vhpKxIOp98IwMGAJkyDKMeRYt55K-SHhDTcoDDNsyXIw8v7puxuQj8mpWKZJ8HfcNQM4cXWeY-LWDzDTMsOHTbMLOx7~e1z8h4PuzC3vm5Ds8DiVwuzpgQ~Vhr7zY-hNjFsw-kNmZ-n2wZovfAPjavk6nL-U7Q~Nj~NG7uO4fo5oHjux-i7vJHTPYBg__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },
    {
        id:5,
        img:"https://s3-alpha-sig.figma.com/img/b389/3c09/95743c67b4289354613b2ee91d05b5c6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGxK7ekTm~bFUNHVtKihNxV0Gv2Z1nNWsWA5m1IfVHGxQsAF0SFi5SX00MASW823uG7nhkwTRDecFjJ05UoXJLoIRPgiqMcff9PusZkiip8fM4RCfIvFkdzVZjDSvu69gGN5dDfN25wNhT3AKGfZgg26v8uOeODgieuxFTMHADCdFGFRIRf~zDc6UlHHmsbZf-cxYuCrsRKZIDM~-NI6FebHs3aRDWDpBPlpLJK~wj~xSSwydje9CbHGY1XA36OzP1et2RWaktVhdYIYLkTGmX2wbPrVTBdCtDSp5Rj-X9C1vvpAYL98kUqTiyMHwWKlew1lEJy71UlsQozQwjYmDw__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },  
     {
        id:6,
        img:"https://s3-alpha-sig.figma.com/img/6aee/d095/e707197257777024dc9b441d0dff459f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdC79rpuuna1l1lKJeawOtjZQs5mBb5iHY0gi7qp4lM9hgpjKE~OPLQMPlzSYW1T~Yj44Z8417XzmMjAOOXIeTFX30v9NMh7hXAJKkUaMPFfDOSMDWaTpyEbon~VoPqiDuk8GxdvJSxXmNSqqIvafiucRB3imhWS6oxj~YUHGCv2cxb1N3QwX6oFWd2EJWMfU89dmvFNHr23bO9DYj4BxB7jZE6TpnHHfTRSA-IUhrLZGARBvaXUKennBG54L53eI5OiDk-H7YBV2GvnFVAfd~y6phiUtQx7XsDtPQ9BX~ldf9y9QzQ0lE0AR8b34TiNXDLgUWYywInm6xHRjrTXKA__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },  {
        id:7,
        img:"https://s3-alpha-sig.figma.com/img/4e4f/99b7/b5644ae26a6a064b2b282d92f5cafff9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYH9jrxEotgZ1BYI0TTD~-uvSGbhdLUjULfnPVQH0mmbuzuHPRH-gWiHPryszsFDt4MIsQeP1ORLwda3c80vkaRBA8PEpHbYkRO77hrckwc54GIprlG~UUEffCJwYXhpnCLN0j38De6GTMlVu9F7qUA-1NcbJjhsbikJKZ2ayPlY7jUQors05kgUjFIRuc8C3s1cJ0Nn8UYLzT0WURZvVlGF2L6V1DsIINzFdlfOmS0vlERTbxIsPtHLAECc0OGE4CKYjZrRpB3VGEwcDhLC0BBDu1dpLxhjOwvnF7jj7i7sAV9TgzJ-EK-GocIRvpnfBXFtB3pgcfNNXDBIly0XMw__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },   {
        id:8,
        img:"https://s3-alpha-sig.figma.com/img/1e1e/fb63/a1de722df617be1af74bf26b36b59dd0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-sEP83~QzFs97WL3NkhZU8Ohgnf2dDq65iBKIeMniLm9xU2NXCL~2--Mi1JddoexUt9wMSAYGsbDghQdGbR5qto2PbRx-2PVvj-WxFAKccUWqUZdqayhy9GnXMe~tB2BNmovQQBQCOL6k0WccS51CeLh-IL-n~gAKrb6At8WtZV7aff3PvR1ftmysaG8r7Wup7hKvVPvajpDk7D2ij2WeV8-JE3srpwIXkMGmyydZa6s34vHKJdiWWE29NAgPDxvSYcK-Pujxtc3Z~vN~4QAa3~GY8GfHBAI9MajbXEtiqL2d60P7O0UKyv8lTd3Wlc0iJOYdgUrDPR-cVSjO2v0w__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },   {
        id:9,
        img:"https://s3-alpha-sig.figma.com/img/3744/8b17/61e03b7bb2882c162b4f7b72a6bb2d7e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqTG-q4aTXZkhLgSCzHFiNh~3lJ27yMyIVujm9TcQviksb60BjBKNn8HDdFlbxQdAUr0Gn0~JUrg-Ch9Cp8NJeqGUSTv88YMAFN3B1Zsq5eHcDsIw-wK336fkn2t~dN8-Kion1hDYb2-nSWKG1W0G04tkTPDMnhy05K4DlAzZCDhMH9Izl8izMU1E4x8yth0yKJn~ewf7UDpmUGcEKIComJA5wAUVj3azdNcVwlGvguLYejXJosU6sYzwWQnUpcJLC4Dob-uatLp8QBqINZ25OkdzpQcv~Xpv-WjxQDj8MzMrxpMWdJNbkY8viufrjb9yEhMKE3mor7jauIPB2J6Iw__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },  {
        id:10,
        img:"https://s3-alpha-sig.figma.com/img/6aee/d095/e707197257777024dc9b441d0dff459f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdC79rpuuna1l1lKJeawOtjZQs5mBb5iHY0gi7qp4lM9hgpjKE~OPLQMPlzSYW1T~Yj44Z8417XzmMjAOOXIeTFX30v9NMh7hXAJKkUaMPFfDOSMDWaTpyEbon~VoPqiDuk8GxdvJSxXmNSqqIvafiucRB3imhWS6oxj~YUHGCv2cxb1N3QwX6oFWd2EJWMfU89dmvFNHr23bO9DYj4BxB7jZE6TpnHHfTRSA-IUhrLZGARBvaXUKennBG54L53eI5OiDk-H7YBV2GvnFVAfd~y6phiUtQx7XsDtPQ9BX~ldf9y9QzQ0lE0AR8b34TiNXDLgUWYywInm6xHRjrTXKA__",
        title:"There’s Coriander in my Sugar Pot!",
        rating:4.3,
        reviews:1234
    },
]

export default newArrivalData;
// import Img1 from '@images/img15.jfif'

const popularSeriesData = [
    {
        id:1,
        title:'Big Bright Feelings',
        img:"https://s3-alpha-sig.figma.com/img/319e/fb57/be4fa79888dd4d5284e463e0f35c4957?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCPOB7thOx0BwQ3HQM~Iup8Z5cYpdKvfktswtuSeVOCRkarw~YKGI3xCvLaUALV07m5OzytFexVz68JdBw6aRR4yWdDIiwR8u~g031GEs-mV-JZ4WglKTBjsckBSYur5d~kOUg1NGroZGAGw6H2CS45bkP3eUh6eOAdpDU84VpqkhATCYLpKDwO2FwechuwI4NbGu4ZYvoS8KC9MC4Oj3assBdHkgeUIzuamYaXVFDrzJBb4~VqCog5Pv1g23tiiK0vpHl1CCA2Qf-aRv69sLaG1QXf4-yT8e4kW~g8TS8OvmKN3xGnzMSMZ6~PxBSI-xvXSyhDJvZtBg2W-rCScTg__",
        quantity:'24 books'
    },
    {
        id:2,
        title:'Mog the Cat',
        img:'https://s3-alpha-sig.figma.com/img/06ce/7638/3358188ac45f314e5446c047db5a895d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBapv6erD7UwVKw7EKuSN4Bbgk1uYmPCk6o8S7bZTP71scy-ZF9cXN53DAkB-5f8EPIFrmP00QSX1mws~xw3nHdw-qdIboAsbCSfVJlytwSoK6uElEPybSiHvM2Co6FPSm0H6JiHvpOzkvqAr0~YV23XSfu1cQyPx2fCD2HvlI7Nvgu9F~gmhndgmmXBeZ9y7GMYdu0qUQE5BNOsalg-p0aIIFk1NRxvEg9-U8FFpkXOyVTs15SfuSERBhxfG6DQ708GcQ1q0z-xWBnDkLJU89G1sZ~7sLfrQRu8GGsGKkRjiCWhMIhARGP1NDWYcbAcowq2jfnLJMbqXAMTjIsTyQ__',
        quantity:'24 books'
    },{
        id:3,
        title:'Elephant and Piggie',
        img:'https://s3-alpha-sig.figma.com/img/2537/6af4/2350a5741ba0a0bbac8b136062c74116?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3~iRSbB9bsg6AoTaqOQCyviTREqnULTby0ueNY21W0uNdJZ7qeZ9rPnW599ZBmGfFeZCqKCt9nBNKGd0TrwITSDPcv0LaxYNbbEY7wdvGMjfYDUrcF3eDpRSB09fO7dH6j9G-Ja1VeaKKyZUPFN26-ncdn42A-1xN07ku3q5-qLuHDb7hhG8SVa-PzuvgaHjhn-v-dgzSOKoOBGGXShVICy4nUAvHlXcr78R6JkOyy9gReHssLvbcVxfZ2da00snqoHL8zjGPpZk0mU~o-aagnEVyoWfI8Ni4FeaZVKJ-kJTBRQCpT7xvFv4Xk9yEpgIch4AjvxerFQgNoKV-B6fA__',
        quantity:'24 books'
    },{
        id:4,
        title:'How to Catch',
        img:'https://s3-alpha-sig.figma.com/img/3744/8b17/61e03b7bb2882c162b4f7b72a6bb2d7e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqTG-q4aTXZkhLgSCzHFiNh~3lJ27yMyIVujm9TcQviksb60BjBKNn8HDdFlbxQdAUr0Gn0~JUrg-Ch9Cp8NJeqGUSTv88YMAFN3B1Zsq5eHcDsIw-wK336fkn2t~dN8-Kion1hDYb2-nSWKG1W0G04tkTPDMnhy05K4DlAzZCDhMH9Izl8izMU1E4x8yth0yKJn~ewf7UDpmUGcEKIComJA5wAUVj3azdNcVwlGvguLYejXJosU6sYzwWQnUpcJLC4Dob-uatLp8QBqINZ25OkdzpQcv~Xpv-WjxQDj8MzMrxpMWdJNbkY8viufrjb9yEhMKE3mor7jauIPB2J6Iw__',
        quantity:'24 books'
    },{
        id:5,
        title:'Peppa Pig Series',
        img:'https://s3-alpha-sig.figma.com/img/4e4f/99b7/b5644ae26a6a064b2b282d92f5cafff9?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYH9jrxEotgZ1BYI0TTD~-uvSGbhdLUjULfnPVQH0mmbuzuHPRH-gWiHPryszsFDt4MIsQeP1ORLwda3c80vkaRBA8PEpHbYkRO77hrckwc54GIprlG~UUEffCJwYXhpnCLN0j38De6GTMlVu9F7qUA-1NcbJjhsbikJKZ2ayPlY7jUQors05kgUjFIRuc8C3s1cJ0Nn8UYLzT0WURZvVlGF2L6V1DsIINzFdlfOmS0vlERTbxIsPtHLAECc0OGE4CKYjZrRpB3VGEwcDhLC0BBDu1dpLxhjOwvnF7jj7i7sAV9TgzJ-EK-GocIRvpnfBXFtB3pgcfNNXDBIly0XMw__',
        quantity:'24 books'
    },  
    {
        id:6,
        title:'Little Critter',
        img:'https://s3-alpha-sig.figma.com/img/b67b/e17c/3e2164531ffc22f97c9c6bf9ab34ad95?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuwVcXQHsjz9lklH5DjI169yDUEbUov8MbhaumCU6G6Q46vf1aMSMiON7NGDZPjmNZ42ipQNBeIihvr74LrPiGGp1huQXtNWXG9odvN-aOTYFYO~nB~5AUex0SeNid3KbCSLljZ4lmM7aQUaIDEUdczz3qouFP70aPDfikktPSIsKuPSa8pTfRfgr5O7-PyLik0GswjvX7V7zKkVXcShyZ53cmHoTsUfkkfW-qLACtfN8IrZsubr7iJKWWh2CF4JpioLohIefmA3INXUaCwf~gHx5Zr6PnmwgYvzWpVB7tGdC0w3~a7W4e-2x83Gqlciv~ra7QQnh2nVMl03hcxsdA__',
        quantity:'24 books'
    },
    {
        id:7,
        title:'Big Bright Feelings',
        img:"https://s3-alpha-sig.figma.com/img/319e/fb57/be4fa79888dd4d5284e463e0f35c4957?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCPOB7thOx0BwQ3HQM~Iup8Z5cYpdKvfktswtuSeVOCRkarw~YKGI3xCvLaUALV07m5OzytFexVz68JdBw6aRR4yWdDIiwR8u~g031GEs-mV-JZ4WglKTBjsckBSYur5d~kOUg1NGroZGAGw6H2CS45bkP3eUh6eOAdpDU84VpqkhATCYLpKDwO2FwechuwI4NbGu4ZYvoS8KC9MC4Oj3assBdHkgeUIzuamYaXVFDrzJBb4~VqCog5Pv1g23tiiK0vpHl1CCA2Qf-aRv69sLaG1QXf4-yT8e4kW~g8TS8OvmKN3xGnzMSMZ6~PxBSI-xvXSyhDJvZtBg2W-rCScTg__",
        quantity:'24 books'
    },
    {
        id:8,
        title:'Mog the Cat',
        img:'https://s3-alpha-sig.figma.com/img/06ce/7638/3358188ac45f314e5446c047db5a895d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBapv6erD7UwVKw7EKuSN4Bbgk1uYmPCk6o8S7bZTP71scy-ZF9cXN53DAkB-5f8EPIFrmP00QSX1mws~xw3nHdw-qdIboAsbCSfVJlytwSoK6uElEPybSiHvM2Co6FPSm0H6JiHvpOzkvqAr0~YV23XSfu1cQyPx2fCD2HvlI7Nvgu9F~gmhndgmmXBeZ9y7GMYdu0qUQE5BNOsalg-p0aIIFk1NRxvEg9-U8FFpkXOyVTs15SfuSERBhxfG6DQ708GcQ1q0z-xWBnDkLJU89G1sZ~7sLfrQRu8GGsGKkRjiCWhMIhARGP1NDWYcbAcowq2jfnLJMbqXAMTjIsTyQ__',
        quantity:'24 books'
    },{
        id:9,
        title:'Elephant and Piggie',
        img:'https://s3-alpha-sig.figma.com/img/2537/6af4/2350a5741ba0a0bbac8b136062c74116?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3~iRSbB9bsg6AoTaqOQCyviTREqnULTby0ueNY21W0uNdJZ7qeZ9rPnW599ZBmGfFeZCqKCt9nBNKGd0TrwITSDPcv0LaxYNbbEY7wdvGMjfYDUrcF3eDpRSB09fO7dH6j9G-Ja1VeaKKyZUPFN26-ncdn42A-1xN07ku3q5-qLuHDb7hhG8SVa-PzuvgaHjhn-v-dgzSOKoOBGGXShVICy4nUAvHlXcr78R6JkOyy9gReHssLvbcVxfZ2da00snqoHL8zjGPpZk0mU~o-aagnEVyoWfI8Ni4FeaZVKJ-kJTBRQCpT7xvFv4Xk9yEpgIch4AjvxerFQgNoKV-B6fA__',
        quantity:'24 books'
    },{
        id:10,
        title:'How to Catch',
        img:'https://s3-alpha-sig.figma.com/img/3744/8b17/61e03b7bb2882c162b4f7b72a6bb2d7e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TqTG-q4aTXZkhLgSCzHFiNh~3lJ27yMyIVujm9TcQviksb60BjBKNn8HDdFlbxQdAUr0Gn0~JUrg-Ch9Cp8NJeqGUSTv88YMAFN3B1Zsq5eHcDsIw-wK336fkn2t~dN8-Kion1hDYb2-nSWKG1W0G04tkTPDMnhy05K4DlAzZCDhMH9Izl8izMU1E4x8yth0yKJn~ewf7UDpmUGcEKIComJA5wAUVj3azdNcVwlGvguLYejXJosU6sYzwWQnUpcJLC4Dob-uatLp8QBqINZ25OkdzpQcv~Xpv-WjxQDj8MzMrxpMWdJNbkY8viufrjb9yEhMKE3mor7jauIPB2J6Iw__',
        quantity:'24 books'
    }
]

export default popularSeriesData;
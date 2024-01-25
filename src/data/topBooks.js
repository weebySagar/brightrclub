// import Img1 from "@images/img3.jfif";
// import Img2 from "@images/img17.jfif";
// import Img3 from "@images/img18.jfif";
// import Img4 from "@images/img1.jfif";
// import Img5 from "@images/img9.jfif";





const topBooks = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/6aee/d095/e707197257777024dc9b441d0dff459f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdC79rpuuna1l1lKJeawOtjZQs5mBb5iHY0gi7qp4lM9hgpjKE~OPLQMPlzSYW1T~Yj44Z8417XzmMjAOOXIeTFX30v9NMh7hXAJKkUaMPFfDOSMDWaTpyEbon~VoPqiDuk8GxdvJSxXmNSqqIvafiucRB3imhWS6oxj~YUHGCv2cxb1N3QwX6oFWd2EJWMfU89dmvFNHr23bO9DYj4BxB7jZE6TpnHHfTRSA-IUhrLZGARBvaXUKennBG54L53eI5OiDk-H7YBV2GvnFVAfd~y6phiUtQx7XsDtPQ9BX~ldf9y9QzQ0lE0AR8b34TiNXDLgUWYywInm6xHRjrTXKA__",
        title: 'There"s Corainder in my Sugar Plot!',
        rating: 4.3,
        reviews: 1234
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/9b1d/cbe0/34f9c64ea625621ea378123e7be98a5a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQqkfm9HLvBkh2G3r2lx12TCqsCCAg6vaUniXKOCHJzsHqW8YX-d5E2yI-t~A5gXfZLQVNXxb6yoivcmCi4zm1ZagktzwsrSTilU--bkyEtiEHYtG2gsjoVatV6ivMms2Qk6dqxcCuOkTgX0m6LWV2nAiLwvoYHJYP0zFlRz6SvPLUb4o565cB~Ey2CSzA1Cm9B19QAiq3Q3f5LL2SuSB0edRcZjpZFAf7Kw9XuN729YaGx69lBW9IO7t65EQPn7u2DbX7YUcf6ya9MB~Sy-paf12Z6yzWLgAnuPhoGoZXM9nKOOISBz4fA33G4fWoyizeDPzbBEae10NQjYVRyvVg__",
        title: 'Can I Play Too? Elephant and Piggie',
        rating: 4.3,
        reviews: 1234
    }, {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/5e1d/93b1/fdf7699693929fb989dafd798f3ed432?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8LyVJl34bGzjlCYhuOFEYZ7jg1ONPxbhowFmjxxNaHKSmXUJ7BgM~Bk2r-OrxIoye7kWvdGkry5EUK0Dto39pgm6cVDRm8PDR~pB~GcElZ~fKeP2k0CyI~w8q6EnLAKIPkpWkRVuRz2gypdTy0rwqb4lCa9wzZ9B1H6QTCnVtZavFb3KG071TBi7rryG3-MezX5mwKckuumyfovqXSzZASH51Neie3X1SgE22R16sAfGowHIFZO9vFANualSSkKVTH~c6UT46ktpC~ej5pq8MGpNwVXSjCOXV118cKRywAfzp8QzkJQ1qQ2AvMzjuRwguse2ReA3d2yW1TByJ1TuA__",
        title: 'The Last Bear by Hanna Gold',
        rating: 4.3,
        reviews: 1234
    }, {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/1e1e/fb63/a1de722df617be1af74bf26b36b59dd0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-sEP83~QzFs97WL3NkhZU8Ohgnf2dDq65iBKIeMniLm9xU2NXCL~2--Mi1JddoexUt9wMSAYGsbDghQdGbR5qto2PbRx-2PVvj-WxFAKccUWqUZdqayhy9GnXMe~tB2BNmovQQBQCOL6k0WccS51CeLh-IL-n~gAKrb6At8WtZV7aff3PvR1ftmysaG8r7Wup7hKvVPvajpDk7D2ij2WeV8-JE3srpwIXkMGmyydZa6s34vHKJdiWWE29NAgPDxvSYcK-Pujxtc3Z~vN~4QAa3~GY8GfHBAI9MajbXEtiqL2d60P7O0UKyv8lTd3Wlc0iJOYdgUrDPR-cVSjO2v0w__",
        title: "Billy’s Bravery by Tom Percival",
        rating: 4.3,
        reviews: 1234
    }, {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/8eed/4280/fe6f001d56f189b81f71907058a230b1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwthD02pEBcvKAd64tOe~Zv-wBpLSJFOF6rRau1phHKtWjvtp6go6JMN0PEjEeVf4wABXxS~lJB7uSqefN7ekR7Jv4M3fwZgxJORum0jw-MvkjdqD6DprvJhQxp-z10EnnqQWKNys6IHKkO~BFm0DTLJeNW6v2FaDhEmbtsddgH1~Oy0h6BsJ0wKgZg45GMb942dPaBUfwbhpKICcVoQXLW54hU6uXqv3v9jffbzEOt-xdXmKBmIfC8nnasD9rD77dlElkbaVOo5gmjUGmeMYZTgYn6fzsLE0qiyVgT8bmRdNzZs6ynaVWJs7qzZgXw49PBG1Fu6-79RJS40au-8eA__",
        title: 'Over the River: A Turkey’s Tale',
        rating: 4.3,
        reviews: 1234
    }, {
        id: 6,
        img: "https://s3-alpha-sig.figma.com/img/6aee/d095/e707197257777024dc9b441d0dff459f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdC79rpuuna1l1lKJeawOtjZQs5mBb5iHY0gi7qp4lM9hgpjKE~OPLQMPlzSYW1T~Yj44Z8417XzmMjAOOXIeTFX30v9NMh7hXAJKkUaMPFfDOSMDWaTpyEbon~VoPqiDuk8GxdvJSxXmNSqqIvafiucRB3imhWS6oxj~YUHGCv2cxb1N3QwX6oFWd2EJWMfU89dmvFNHr23bO9DYj4BxB7jZE6TpnHHfTRSA-IUhrLZGARBvaXUKennBG54L53eI5OiDk-H7YBV2GvnFVAfd~y6phiUtQx7XsDtPQ9BX~ldf9y9QzQ0lE0AR8b34TiNXDLgUWYywInm6xHRjrTXKA__",
        title: 'There"s Corainder in my Sugar Plot!',
        rating: 4.3,
        reviews: 1234
    },
    {
        id: 7,
        img: "https://s3-alpha-sig.figma.com/img/9b1d/cbe0/34f9c64ea625621ea378123e7be98a5a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQqkfm9HLvBkh2G3r2lx12TCqsCCAg6vaUniXKOCHJzsHqW8YX-d5E2yI-t~A5gXfZLQVNXxb6yoivcmCi4zm1ZagktzwsrSTilU--bkyEtiEHYtG2gsjoVatV6ivMms2Qk6dqxcCuOkTgX0m6LWV2nAiLwvoYHJYP0zFlRz6SvPLUb4o565cB~Ey2CSzA1Cm9B19QAiq3Q3f5LL2SuSB0edRcZjpZFAf7Kw9XuN729YaGx69lBW9IO7t65EQPn7u2DbX7YUcf6ya9MB~Sy-paf12Z6yzWLgAnuPhoGoZXM9nKOOISBz4fA33G4fWoyizeDPzbBEae10NQjYVRyvVg__",
        title: 'Can I Play Too? Elephant and Piggie',
        rating: 4.3,
        reviews: 1234
    }, {
        id: 8,
        img: "https://s3-alpha-sig.figma.com/img/5e1d/93b1/fdf7699693929fb989dafd798f3ed432?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8LyVJl34bGzjlCYhuOFEYZ7jg1ONPxbhowFmjxxNaHKSmXUJ7BgM~Bk2r-OrxIoye7kWvdGkry5EUK0Dto39pgm6cVDRm8PDR~pB~GcElZ~fKeP2k0CyI~w8q6EnLAKIPkpWkRVuRz2gypdTy0rwqb4lCa9wzZ9B1H6QTCnVtZavFb3KG071TBi7rryG3-MezX5mwKckuumyfovqXSzZASH51Neie3X1SgE22R16sAfGowHIFZO9vFANualSSkKVTH~c6UT46ktpC~ej5pq8MGpNwVXSjCOXV118cKRywAfzp8QzkJQ1qQ2AvMzjuRwguse2ReA3d2yW1TByJ1TuA__",
        title: 'The Last Bear by Hanna Gold',
        rating: 4.3,
        reviews: 1234
    }, {
        id: 9,
        img: "https://s3-alpha-sig.figma.com/img/1e1e/fb63/a1de722df617be1af74bf26b36b59dd0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-sEP83~QzFs97WL3NkhZU8Ohgnf2dDq65iBKIeMniLm9xU2NXCL~2--Mi1JddoexUt9wMSAYGsbDghQdGbR5qto2PbRx-2PVvj-WxFAKccUWqUZdqayhy9GnXMe~tB2BNmovQQBQCOL6k0WccS51CeLh-IL-n~gAKrb6At8WtZV7aff3PvR1ftmysaG8r7Wup7hKvVPvajpDk7D2ij2WeV8-JE3srpwIXkMGmyydZa6s34vHKJdiWWE29NAgPDxvSYcK-Pujxtc3Z~vN~4QAa3~GY8GfHBAI9MajbXEtiqL2d60P7O0UKyv8lTd3Wlc0iJOYdgUrDPR-cVSjO2v0w__",
        title: "Billy’s Bravery by Tom Percival",
        rating: 4.3,
        reviews: 1234
    }, {
        id: 10,
        img: "https://s3-alpha-sig.figma.com/img/8eed/4280/fe6f001d56f189b81f71907058a230b1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwthD02pEBcvKAd64tOe~Zv-wBpLSJFOF6rRau1phHKtWjvtp6go6JMN0PEjEeVf4wABXxS~lJB7uSqefN7ekR7Jv4M3fwZgxJORum0jw-MvkjdqD6DprvJhQxp-z10EnnqQWKNys6IHKkO~BFm0DTLJeNW6v2FaDhEmbtsddgH1~Oy0h6BsJ0wKgZg45GMb942dPaBUfwbhpKICcVoQXLW54hU6uXqv3v9jffbzEOt-xdXmKBmIfC8nnasD9rD77dlElkbaVOo5gmjUGmeMYZTgYn6fzsLE0qiyVgT8bmRdNzZs6ynaVWJs7qzZgXw49PBG1Fu6-79RJS40au-8eA__",
        title: 'Over the River: A Turkey’s Tale',
        rating: 4.3,
        reviews: 1234
    },
];

export default topBooks;
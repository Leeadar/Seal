const data = [
    {
        id: 1,
        type: "meat",

        name: "עוף בתיבול פיקנטי",

        description:"לאוהבי החריף: עוף פיקנטי אפוי בתנור עם פפריקה חריפה ותבלין צ'ילי.",

        imgURL: "https://www.10dakot.co.il/wp-content/uploads/2021/02/%E2%80%8F%E2%80%8FDSC_0039-%D7%A2%D7%95%D7%AA%D7%A7.jpg",

        recipe:"מערבבים בקערית את חומרי התיבול מתבלים את העוף, תפוחי האדמה והבטטה. מניחים בתבנית ענקית מרופדת בנייר אפיה ומוסיפים שליש כוס מים. מכניסים לתנור שחומם ל-185 מעלות במשך כשעה וחצי(חום עליון ותחתון).",        
        products: [{id:1010,amount:8,name:"שוקיים עוף"},
        {id:1011, amount:2, name:"תפוח אדמה ",description:"בינוניים"},
        {id:1012, amount:1, name:"בטטה",description:"קטנה קלופה חתוכה לקוביות"},
    ],
        makingTime:100,
    },


    {
        id: 2,
        type: "meat",

        name: "נתחי אנטריקוט מוקפצים",

        description:"נתחי אנטריקוט מוקפצים במחבת עם פטריות - מומלץ להגיש עם אורז לבן.",

        imgURL: "https://www.10dakot.co.il/wp-content/uploads/2019/03/%E2%80%8F%E2%80%8FDSC_0042-%D7%A2%D7%95%D7%AA%D7%A7-1.jpg",
        recipe: "מערבבים בקערית את חומרי התיבול ומתבלים את חומרי התיבול ומתבלים את חלקי העוף, תפוחי האדמה והבטטה.מניחים בתבנית ענקית מרופדת בנייר אפיה ומוסיפים שליש כוס מים. מכניסים לתנור שחומם ל185 מעלות במשך כשעה וחצי",
        products: [{id:103,amount:500,name:"גרם נתחי אנטריקוט"},
        {id:104, amount:2, name:"בצלים ",description:"בינוניים"},
        {id:105, amount:100, name:"גרם פטריות",description:"חצויות"},
    ],
        makingTime:25,
    },
    {
        id: 3,
        type: "Vegan",

        name: "סטייק חצילים ברוטב תאנים ובצלצלי שאלוט",

        description: "מנה מרשימה ויפה של סטייק חציל בליווי רוטב מתקתק. לנו זה הזכיר מנה ראשונה בארוחה רומנטית לצד אור נרות ",
        
        imgURL: "https://vegan-friendly.co.il/img/recipes/thumb_1417698100_52.jpg",
        recipe: ":סטייק חצילים.ליצוק לקערית את שמן זית עלי הקורנית והשום ולערבב היטב.למרוח את החצילים משני הצדדים.לחמם מחבת פסים על חום גבוה ולצרוב את החצילים משני הצדדים עד לריכוך בערך 5-7 דקות מכל צד (זהירות לא להפוך אותם לרכים מידי):רוטב תאנים ובצלצלי שאלוט לטגן את בצלצלי השאלוט (בשלמותם) עם מעט שמן זית עד להשחמה קלה.לטחון את התאנים למחית בבלנדר או מעבד מזון.להוסיף את כוס היין יחד עם מחית התאנים.להוסיף קינמון ולבשל עד לצמצום תוך כדי ערבוב מידי פעם.לצקת את הרוטב מעל סטייק החציל ולהגיש,בתיאבון!",
       
        products: [
        {id:1001,amount:1,  description:"ארבע פרוסות חציל"},
        {id:1002, amount:5},
        {id:1003, amount:1,description:"כוס אחת"},
        {id:1004, amount:4},
        {id:1005, amount:1,description:"לפי הטעם"},
        {id:1006, amount:1,description:"רבע כוס"},
        {id:1007, amount:1,description:"שן אחת"},
        {id:1008, amount:1,description:"כפית"},
        ],
        makingTime: "40",
    },
]
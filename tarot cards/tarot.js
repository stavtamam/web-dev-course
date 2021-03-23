$(function () {
    $('#submit').click(function () {
        switchText();
    });
});

//todays date split:
let today = new Date();
let Year = today.getFullYear().toString().split('');
let day = today.getDate();
let month = (today.getMonth() + 1).toLocaleString().split('');
console.log(Year);

//birthday split:
let date;
let birthDay;
let birthMonth;
let birthMonthNum;

//spliting and summing the digits from the input:
function digits(digit) {

    var digitSum = 0;
    if (digit.length >= 4) {
        digitSum +=
            parseInt(digit[0]) + parseInt(digit[1]) + parseInt(digit[2]) + parseInt(digit[3]);
        return digitSum;
    }
    if (digit.length > 1) {
        digitSum += parseInt(digit[0]) + parseInt(digit[1]);
        digitSplit = digitSum.toString().split('');
        // console.log(digitSplit);
        if (digitSplit.length > 1) {
            digitSum = parseInt(digitSplit[0]) + parseInt(digitSplit[1]);
            // console.log(digitSum);
            return digitSum;
        }
        else {
            // console.log(digitSum);
            return digitSum;
        }
    } else {
        // console.log(digit);
        return digit;
    }


}

//taking the results from digits and calculating personal year:
function personalYear() {
    if (birthMonthNum > 6) {
        let a = 1;
        let digitsSum = a + digits(birthDay) + digits(birthMonth) + digits(Year);
        let g = digitsSum.toString().split('');
        // console.log(g);
        if (g.length > 1) {
            g = parseInt(g[0]) + parseInt(g[1]);
            digitsSum = g.toString().split('');
            // console.log(g);
            return g;
        }
        if (digitsSum.length > 1) {
            g = parseInt(digitsSum[0]) + parseInt(digitsSum[1]);
            // console.log(g);
            return g;
        } else {
            // console.log(g);
            return g;
        }
    } else {
        a = 0;
        let digitsSum = a + digits(birthDay) + digits(birthMonth) + digits(Year);
        let f = digitsSum.toString().split('');
        if (f.length > 1) {
            let g = parseInt(f[0]) + parseInt(f[1]);
            return g;
        } else {
            f = parseInt(f);
            console.log(f);
            return f;
        }
    }
}

//taking the result from personal year and calculating previous personal year:
function prevPersonalYear() {
    let h;
    if (personalYear() == 1) {
        h = 9;
        return h;
    } else {
        h = personalYear() - 1;
        // console.log(h);
        return h;
    }
}

//calculating which function to turn on...
function thisYear() {
    // console.log(birthMonthNum, month);
    let j;
    if (birthMonthNum >= today.getMonth() + 1) {
        j = prevPersonalYear();
        return j;
    } else {
        j = personalYear();
        // console.log(j)
        return j;
    }
}

//html:
function switchText() {
    date = $('#date').val().split('-');
    birthDay = date[2].split('');
    birthMonth = date[1].split('');
    birthMonthNum = parseInt(date[1]);

    console.log(date);



    let x = parseInt(thisYear());
    let text;
    // console.log(x);
    switch (x) {
        case 1:
            text =
                'שנת התחלות חדשות, שנים שבהן מרגישים השפעות הורמונליות <br> פותח שנה של התחלות חדשות. בשנה זו יש צורך לעשות התחלות חדשות אחרי שנתיים שלמות של לבטים <br> באחד או יותר משלושה מרכיבים: או בזוגיות, או בעיסוק או במיקום. לכן, במהלך שנה זו עליך לבצע החלטה. <br>החלטה זהו יכולה גם להוביל אותך לסיים דברי. ההתחלות החדשות במהלך שנה זו הינן יש מאין- יש ביכולתך להתחיל דברים שלא קיימים עד כה במציאות חייך. שנה זו ושנה הבאה הינן שנים הורמונליות עבור נשים אלו שנים שבהן נשים מרגישות יותר מחוזרות מהרגיל, שנים שבהן הרגשות נחוות בעוצמות חזקות יותר ושנים שבהן השפעות הורמונליות אחרות בגוף מקבלות ביטוי באופן חזק יותר מהרגיל.';
            break;
        case 2:
            text =
                'שנת יצירת קשרים, שנים שבהן מרגישים השפעות הורמונליות.פותח שנה של יצירת קשרים. בשנה הקודמת הרגשת צורך לעשות התחלות חדשות אחרי שנתיים שלמות של לבטים באחד או יותר משלושה מרכיבים- או בזוגיות, או בעיסוק או במיקום. במהלך שנה זו יורגש הצורך ליצור קשרים אחרי ההתחלות, אבל, התחושה תהיה גם ‘פול גז בניוטרל’- תחושה שמגיעה כי יצירת הקשר עדיין לא מביאה להזדמנויות, ולכן יש צורך בהרבה סבלנות, טקט ודיפלומטיה. ביום הולדתך הבא, יגיעו ההזדמנויות, כמובן- בהתאם להתחלות ויצירת הקשרים. אם לא יצרת קשרים בשנה זו ולא עשית התחלה חדשה בשנה הקודמת- כמעט ולא תהינה הזדמנויות, ואם עשית- ההזדמנויות תהינה גדולות. שנה זו והשנה הקודמת הנן שנים הורמונליות עבור נשים- אלו שנים שבהן נשים מרגישות יותר מחוזרות מהרגיל, שנים שבהן הרגשות נחוות בעוצמות חזקות יותר, ושנים שבהן השפעות הורמונליות אחרות בגוף מקבלות ביטוי באופן חזק יותר מהרגיל';
            break;
        case 3:
            text =
                'שנת הזדמנויות. שנות התעסקות במבנה- או מבנה מגורים או עסק. יתכן שיפוץ ויתכן מעבר.פותח שנה של הזדמנויות. בשנה זו  ההזדמנויות מגיעות, כמובן- בהתאם לבחירותייך בשנתיים הקודמות. בשנה האחרונה היית בשנה של יצירת קשרים. שנה לפניה היית בשנה של התחלות חדשות. אם לא יצרת ולא עשית התחלה- כמעט ולא תהינה הזדמנויות בשנה זו, ואם עשית- ההזדמנויות בשנה זו תהינה גדולות. בשנה זו יש גם אפשרות לביטוי כישורים, והיצירתיות שבך תתחזק. שנה זו והשנה הבאה הן שנתיים שמלאות בתהליכים שמובילים לשינוי. בשנים אלו רוב האנשים מוצאים את עצמם מתעסקים במבנה- יתכן שיפוץ או מעבר הן של בית מגורים והן של מבנה המשרדים או מיקום העסק';
            break;
        case 4:
            text =
                'שנת משוב. שנות התעסקות במבנה- או מבנה מגורים או עסק. יתכן שיפוץ ויתכן מעבר. פותח שנת משוב. זו שנה שבה הגורל בודק את התנהלותך בחמש השנים האחרונות בשלושת מערכות החיים- זוגיות, עיסוק ומיקום. הגורל בודק האם ההחלטות שקיבלת בחייך מקדמות את הגשמת מציאות החיים הנכונה עבורך. שנה זו והשנה הקודמת הן שנתיים שמלאות בתהליכים שמובילים לשינוי. בשנים אלו רוב האנשים מוצאים את עצמם מתעסקים במבנה- יתכן שיפוץ או מעבר הן של בית מגורים והן של מבנה המשרדים או מיקום העסק.';
            break;
        case 5:
            text =
                'שנת שינויים. שנה זו והשנה הבאה הן שנות שינויים משפחתיים.פותח שנה של שינויים בהתאם. תרגישי צורך עז לעשות שינויים, ומומלץ לעשותם. השינויים יהיו בהתאם למשוב שקיבלת בשנה הקודמת. אם המשוב היה להצלחה- השינויים להתפתחות ולהתקדמות. אם המשוב היה לכישלון- השינויים שידרשו ממך יהיו לתקן את הכישלון. שנה זו מביאה איתה גם אנרגיה של פרסום, של מרחבים, של עשיה. בשנה זו נכון להשתמש בפלטפורמות שונות לשיווק. יתכן שבשנה זו תהיי בנסיעות מרובות או בפעילות מול חו’’ל. מטרת כל אלו הנה לקדם את השינויים הנכונים בחייך. שנה זו והשנה הבאה הן שנתיים שקרויות גם שנות השינויים המשפחתיים- זמן טוב לכל שינוי משפחתי מתוכנן.';
            break;
        case 6:
            text =
                'שנת משפחתיות. שנה זו והשנה הקודמת הנן שנות שינויים משפחתיים פותח שנה משפחתית. יורגש צורך עז להיות עם המשפחה. אם לא תעשי, היקום יכריח אותך באמצעות מניפולציות משפחתיות סביבתיות. הסביבה המשפחתית תאפשר לך קבלה של המהות הפנימית שלך, וחיבור לחזון הנכון עבורך. שנה זו והשנה הקודמת הן שנות השינויים המשפחתיים.';
            break;
        case 7:
            text =
                'שנת משוב פותח שנת משוב. בשנה זו הכתר בראש נפתח ולכן יכולת הקליטה והתודעה מהגבוהים ביותר. במקביל, הגוף רוצה לנוח אחרי שבע שנים של עבודה. לכן בשנה זו עליך לנוח וללמוד, להמעיט בעבודה קשה ולהשקיע בחשבון הנפש, בכדי להתארגן למציאות הבאה. לא מומלץ בשנה זו לחתום על חוזים משמעותיים ולהוציא כספים. בשנה זו המערכת בודקת את שלושת מרכיבי החיים- זוגיות, עיסוק ומיקום.';
            break;
        case 8:
            text =
                'שנת התחזקות פותח שנתיים של התחזקות.<br> שנתיים בהם אנו מתחזקים נפשית וגופנית, בהתאם למשוב ולמהלכים שהיו בשנה הקודמת. השנה הקודמת הייתה שנת משוב, שנה בה הכתר בראש נפתח ומגיעות תובנות לגבי תחומי השנים השונים- זוגיות או עיסוק או מיקום. בשנה הקודמת חשת אנרגיה ירודה, הגוף רצה לנוח. ביום הולדתך שחל השנה, תחל התחזקות אנרגטית בכל הרמות. שנה זו מזמנת התלבטויות גדולות עם ידע הקשור בשבע השנים הבאות. היא כוללת גם את המבט לקראת מחזור החיים הבא, וגם את התובנות שהתקבלו בשנת המשוב. שנה זו והשנה הבאה מכוונות אותנו אל התחלות החדשות.';
            break;
        case 9:
            text =
                'שנת סיומים פותח שנה של סיומות.<br> שנה זו והשנה הקודמת הנן שנתיים שבהן מתחזקים נפשית וגופנית, בהתאם למשוב ולמהלכים שקיבלת לפני שנתיים. מתחילים תקופה של התלבטויות גדולות עם ידע הקשור בשבע השנים הבאות. שנה זו מכוונת אותנו אל ההתחלות החדשות של המטלה הבאה. זו גם שנה ורבלית- יעמדו בפניך אפשרויות והזדמנויות לבטא את האמת שלך כלפי העולם.דברים בחייך יסתיימו על מנת לפנות מקום לדברים חדשים.';
            break;
        default:
            text = 'no value found..';
            break;
    }

    let month1 = personalMonths(moment().format("MM"));
    let month2 = personalMonths(moment().add(1, 'M').format("MM"));
    let month3 = personalMonths(moment().add(2, 'M').format("MM"));

    $('#span').html('השנה האישית שלך : ' + thisYear() + '<br>' + text)
    $('#span2').html("<br>" + "<br>ומה צפוי בחודשים הקרובים? <br>החודש: " + switchMonth(month1) + "<br> חודש הבא: " + switchMonth(month2) + "<br>והחודש שאחריו: " + switchMonth(month3));
}

//personal month text:
function switchMonth(months) {
    let month;
    switch (months) {
        case 1:
            Mtext = 'חודש זה מביא עמו אנרגיה של התחלות חדשות. בחודש זה נכון לקבל החלטה- החלטה זו יכולה גם להוביל אותך לסיים דברים. יש לחודש אנרגיה של יזמות, של פריצת דרך, וחשוב שתהני מאנרגיה זו.'
            break;
        case 2:
            Mtext = 'חודש זה מביא עמו אנרגיה של יצירת קשרים. יש חלון הזדמנויות ליצור קשרים- שבחודש הבא יוכלו להביא למימוש הזדמנויות. חשוב להיות מודעים גם לכך שחודש זה הוא חודש הורמונלי- זה עשוי לבוא לידי ביטוי ברגשות מועצמים, בהיותך מחוזרת או בכל השפעה הורמונלית אחרת.'
            break;
        case 3:
            Mtext = 'חודש זה מביא איתו הזדמנויות מרובות. אם במהלך החודש הקודם תצרי את הקשרים הנכונים, ובמהלך זה שלפניו תבצעי התחלות חדשות, ההזדמנויות יגיעו.'
            break;
        case 4:
            Mtext = 'זה חודש שבו תקבלי תובנות נוספות בתחומי חייך השונים בהתאם להתנהלות בחמשת החודשים האחרונים. חשוב להיות בהקשבה ובמודעות במהלך חודש זה.'
            break;
        case 5:
            Mtext = 'חודש זה מביא עמו אנרגיה של שינויים, אנרגיה של פרסום ושל תנועה. אנרגיה של עשיה. כדאי להשתמש באנרגיה זו בהתאם לאנרגיה של השנה. נכון יהיה לאמץ את האנרגיה הזו לקידום ההתלבטויות שנמצאות כעת בחייך'
            break;
        case 6:
            Mtext = 'חודש זה מביא עמו אנרגיה של משפחתיות. סביבה משפחתית תחזק אותך, תרגישי צורך להיות יותר בסביבת המשפחה.'
            break;
        case 7:
            Mtext = 'חודש זה מביא עמו אנרגיה של משוב. האנרגיה קצת ירודה, תרצי יותר לנוח. נכון להקשיב לתובנות שמגיעות בחודש זה, שכן הן יקדמו אותך במציאויות חייך. אם יש החלטות כבדות משקל או חוזים שצריך לחתום עליהם עדיף להמתין לחודש הבא.'
            break;
        case 8:
            Mtext = 'חודש זה מביא עמו אנרגיה של התחזקות. בחודש זה תתחזקי נפשית וגופנית'
            break;
        case 9:
            Mtext = 'חודש זה יביא איתו אנרגיה של סיומות- סגירה של דברים שלא נכונים בחייך ולא משרתים אותך בדרכך. סגירה של דברים אלו תאפשר התחלות חדשות שנכונות עבורך.'
            break;
        default:
            break;
    }
    return Mtext;
}

function personalMonths(months) {
    let l;
    let monthSplit = months.toString().split('');
    //console.log(monthSplit)
    if (monthSplit.length > 1) {
        month = parseInt(monthSplit[0]) + parseInt(monthSplit[1]);
    } else {
        month = parseInt(monthSplit)
        //console.log(month)
    }
    if (month > birthMonthNum) {
        l = personalYear() + month;
        //console.log(l);
    } else {
        l = prevPersonalYear() + month;
        //console.log(l);
    }
    let lSplit = l.toString().split('');
    if (lSplit.length > 1) {
        l = parseInt(lSplit[0]) + parseInt(lSplit[1]);
        lSplit = l.toString().split('');
        if (lSplit.length > 1) {
            l = parseInt(lSplit[0]) + parseInt(lSplit[1]);
            return l;
        }
        return l;
    } else {
        return l;
    }
}
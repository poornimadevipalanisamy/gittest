context.data = context.data || {};
switch (msg.topic) {
    case "a1":
        context.data.a1 = msg.payload;
        msg = null;
        break;
    case "a2":
        context.data.a2 = msg.payload;
        msg = null;
        break;
    case "a3":
        context.data.a3 = msg.payload;
        msg = null;
        break;
    case "a4":
        context.data.a4 = msg.payload;
        msg = null;
        break;
    case "a5":
        context.data.a5 = msg.payload;
        msg = null;
        break;
    case "a6":
        context.data.a6 = msg.payload;
        msg = null;
        break;
    case "a7":
        context.data.a7 = msg.payload;
        msg = null;
        break;
    case "a8":
        context.data.a8 = msg.payload;
        msg = null;
        break;
    case "a9":
        context.data.a9 = msg.payload;
        msg = null;
        break;
    case "a10":
        context.data.a10 = msg.payload;
        msg = null;
        break;
    case "a11":
        context.data.a11 = msg.payload;
        msg = null;
        break;
    case "a12":
        context.data.a12 = msg.payload;
        msg = null;
        break;
    case "a13":
        context.data.a13 = msg.payload;
        msg = null;
        break;
    case "a14":
        context.data.a14 = msg.payload;
        msg = null;
        break;
    case "a15":
        context.data.a15 = msg.payload;
        msg = null;
        break;
    case "a16":
        context.data.a16 = msg.payload;
        msg = null;
        break;
    case "a17":
        context.data.a17 = msg.payload;
        msg = null;
        break;
}
if (context.data.a1 != null && context.data.a2 != null && context.data.a3 != null && context.data.a4 != null && context.data.a5 != null && context.data.a6 != null && context.data.a7 != null && context.data.a8 != null && context.data.a9 != null && context.data.a10 != null && context.data.a11 != null && context.data.a12 != null && context.data.a13 != null && context.data.a14 != null && context.data.a15 != null && context.data.a16 != null && context.data.a17 != null) {
    var data_combine = {
        "a1": context.data.a1,
        "a2": context.data.a2,
        "a3": context.data.a3,
        "a4": context.data.a4,
        "a5": context.data.a5,
        "a6": context.data.a6,
        "a7": context.data.a7,
        "a8": context.data.a8,
        "a9": context.data.a9,
        "a10": context.data.a10,
        "a11": context.data.a11,
        "a12": context.data.a12,
        "a13": context.data.a13,
        "a14": context.data.a14,
        "a15": context.data.a15,
        "a16": context.data.a16,
        "a17": context.data.a17
    }
    context.data = null
    return { payload: data_combine };
}

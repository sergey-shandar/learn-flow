// @flow strict

type JsonObject = {| +[string]: ?Json |};

type JsonArray = Array<Json>;

type Json = null|boolean|number|string|JsonObject|JsonArray;

const x: JsonObject = { "44": "s" }

const y = x.d56

type Limit = {| +a?: boolean |}

type B = JsonObject & Limit

const empty: {||} = Object.freeze({})

const b: B = /*empty*/ { a: true }

const r: ?boolean = b.a

//b.a = 45
//b.h = "33"

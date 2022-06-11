let https=require("https");
let http=require("http");
let url=require("url")

const parsedUrl = url.parse(
    "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
    true
  );
  console.log(parsedUrl);
  console.log(parsedUrl.pathname);
  console.log(parsedUrl.query);
console.log(parsedUrl);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

let parsedUrl2 = url.parse('https://www.google.co.in/',true);
console.log(parsedUrl2);

// get header

    // const parsedUrl2 = url.parse("https://www.google.com/",true);
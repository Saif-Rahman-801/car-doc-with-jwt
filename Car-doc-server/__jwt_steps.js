/* 
1. install jsonwebtoken
2. jwt.sign (payload, "secret", {expirsIn: 1h})
3. token to client side -> Local storage/ CLient side code/ Cookies(recommended)

4. Install express cookie parser
5. set cookies with http only -> res
        .cookie("name", value, {
          httpOnly: true,
          secure: false,// for production secure: true
          sameSite: "none",
        })
        .send({ success: true });

6. Set cors to get token
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);  
7. Client side credential setting with axios
 */
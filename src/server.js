import express from "express"; const app=express(); app.get("/health",(_q,r)=>r.json({status:"ok"})); app.listen(process.env.PORT||3000);

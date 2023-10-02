const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Noval2005';


// const token = jwt.sign({data:{kelas: 'kocak'}}, JWT_SECRET, {expiresIn: '1m'});
// console.log(token);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoia29jYWsifSwiaWF0IjoxNjk1ODk1ODIxLCJleHAiOjE2OTU4OTU4ODF9.67mGpKj74JBuiegMihAwSDnO9rgtAJKqJcKyTcd4flQ';
// jwt.sign({data: {kelas:'luthfi'}},JWT_SECRET, {expiresIn: '5m'},(err, token)=>{
//     console.log(token);
    
// });
// console.log('test');
jwt.verify(token, JWT_SECRET, (err, decoded)=>{
    console.log(decoded);
});
try{
    // jwt.decode(token);
    const decoded = jwt.verify(token,JWT_SECRET);
    console.log(decoded);
}catch(err){
    console.log(err.message);
}
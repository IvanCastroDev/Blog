export const validateRequest = (req, res, next) => {
    if (req.body.username === "" || !req.body.password === "")
        return res.status(400).json({msg: "No data provided"})
    
    next();
}
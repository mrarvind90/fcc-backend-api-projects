export const uploadFile = (req, res) => {
	return res.status(201).json({
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	});
};

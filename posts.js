Post
  .findById(req.params.id).lean().populate('comments')
  .then((post) => res.render('post-show', { post }))
  .catch((err) => {
    console.log(err.message);
  });

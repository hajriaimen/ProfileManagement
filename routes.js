const routes = require('next-routes')();

routes
  .add('index')
  .add('login')
  .add('profile', '/profile', 'profile')
  .add('post', '/blog/post/:id', 'article')
  .add('question', '/help/question/:id', 'question')
  .add('CandidateAlerts', '/candidate/alerts', 'candidate/alerts')
  .add('CandidateAlertCreate', '/candidate/alerts/create', 'candidate/alerts/create')
  .add('CandidatAlertUpdate', '/candidate/alerts/update/:id', 'candidate/alerts/create')
  .add('jobOffer', '/offer/:id', 'offer');
module.exports = routes;

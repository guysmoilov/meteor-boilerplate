var subs = new SubsManager();

Router.plugin('auth', {
  authenticate: 'login',
  except: ['login'],
});

Router.route('/', {
  template: 'login',
  name: 'login',
  noAuth: {
    home: 'home'
  },
  onBeforeAction: ['noAuth'],
});

Router.route('/home', {
  template: 'home',
  name: 'home'
});

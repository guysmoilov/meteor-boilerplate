var subs = new SubsManager();

Router.plugin('auth', {
  authenticate: 'home',
  authorize: {
    allow: function() {
      return false;
    }
  },
  except: ['home']
});

Router.route('/', {
  template: 'home',
  name: 'home'
});

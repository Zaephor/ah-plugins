const path = require('path')
exports['default'] = {
  plugins: (api) => {
    /*
    If you want to use plugins in your application, include them here:

    return {
      'myPlugin': { path: __dirname + '/../node_modules/myPlugin' }
    }

    You can also toggle on or off sections of a plugin to include (default true for all sections):

    return {
      'myPlugin': {
        path: __dirname + '/../node_modules/myPlugin',
        actions: true,
        tasks: true,
        initializers: true,
        servers: true,
        public: true,
        cli: true
      }
    }
    */

    return {
      'ah-session-plugin': { path: path.join(require.resolve('@zaephor-ah/ah-session-plugin'), '..') },
      'ah-knex-plugin': { path: path.join(require.resolve('@zaephor-ah/ah-knex-plugin'), '..') },
      'ah-objection-plugin': { path: path.join(require.resolve('@zaephor-ah/ah-objection-plugin'), '..') },
      'ah-auth-plugin': { path: path.join(require.resolve('@zaephor-ah/ah-auth-plugin'), '..') }
    }
  }
}

define(function (require) {
  return {
    workflowApiVersion: '1.1',
    metaData: {
      icon: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/raia/images/whatsapp.png',
      iconSmall: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/raia/images/whatsapp.png',
      category: 'message',
    },
    type: 'REST',
    lang: {
      'en-US': {
        name: 'Central de Notificações',
        description: 'POC Central de Notificações',
      },
      'pt-BR': {
        name: 'Central de Notificações',
        description: 'POC Central de Notificações',
      },
    },
    arguments: {
      execute: {
        inArguments: [],
        outArguments: [],
        url: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/raia/execute',
        verb: 'POST',
        body: '',
        header: '',
        format: 'json',
        useJwt: true,
        timeout: 10000,
      },
    },
    configurationArguments: {
      applicationExtensionKey: '08888d52-ba1b-4a0e-b89c-50f00733af31',
      save: {
        url: 'https://mscst-git-main-decilios-projects.vercel.app/v1/api/custom-activity/raia/save',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      publish: {
        url: 'https://mscst-git-main-decilios-projects.vercel.app/v1/api/custom-activity/raia/publish',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      validate: {
        url: 'https://mscst-git-main-decilios-projects.vercel.app/v1/api/custom-activity/raia/validate',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      stop: {
        url: 'https://mscst-git-main-decilios-projects.vercel.app/v1/api/custom-activity/raia/stop',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      edit: {
        url: 'https://mscst-git-main-decilios-projects.vercel.app/v1/api/custom-activity/raia/edit',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
    },
    wizardSteps: [
      {
        label: 'Configure HSM Template',
        key: 'step1',
      },
    ],
    userInterfaces: {
      configModal: {
        url: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/raia/',
        height: 600,
        width: 600,
        fullscreen: false,
      },
    },
    schema: {
      arguments: {
        execute: {
          inArguments: [],
          outArguments: [],
        },
      },
    },
  };
});

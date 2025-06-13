define(function (require) {
  return {
    workflowApiVersion: '1.1',
    metaData: {
      icon: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/drogasil/images/whatsapp.png',
      iconSmall: 'https://api-rd-internal-qa.raiadrogasil.io/v1/api/custom-activity/drogasil/images/whatsapp.png',
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
        url: 'https://50c8-2804-7f0-20-3f1f-6436-bd4d-6a8c-84e7.ngrok-free.app/v1/api/custom-activity/drogasil/execute',
        verb: 'POST',
        body: '',
        header: '',
        format: 'json',
        useJwt: true,
        timeout: 10000,
      },
    },
    configurationArguments: {
      applicationExtensionKey: '58429bf3-3585-49ab-9c42-5fff84af9ac1',
      save: {
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/save',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      publish: {
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/publish',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      validate: {
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/validate',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      stop: {
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/stop',
        verb: 'POST',
        useJwt: true,
        header: '',
      },
      edit: {
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/edit',
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
        url: 'https://mscst.vercel.app/v1/api/custom-activity/drogasil/',
        height: 700,
        width: 700,
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

define(function (require) {
  const Postmonger = require('postmonger');

  const connection = new Postmonger.Session();
  let payload = {};
  let schemaDE = [];
  const dataDE = {};

  $(window).ready(onRender);

  connection.on('initActivity', initialize);
  connection.on('requestedSchema', requestedSchema);
  connection.on('clickedNext', save);

  function onRender() {
    connection.trigger('ready');
    connection.trigger('requestSchema');
  }

  function initialize(data) {
    console.log('data', JSON.stringify(data));
    if (data) {
      payload = data;
    }

    const hasInArguments = Boolean(
      payload.arguments &&
        payload.arguments.execute &&
        payload.arguments.execute.inArguments &&
        payload.arguments.execute.inArguments.length > 0,
    );

    const inArguments = hasInArguments ? payload.arguments.execute.inArguments : [];

    inArguments.forEach(function (args) {
      if (args.template) {
        $('#template').val(args.template);
      }
      if (args.title) {
        $('#title').val(args.title);
      }
      if (args.message) {
        $('#message').val(args.message);
      }
      if (args.mediaUrl) {
        $('#mediaUrl').val(args.mediaUrl);
      }
      if (args.url) {
        $('#url').val(args.url);
      }

      if (args.vucCode) {
        $('#vucCodeField').val(args.vucCode);
      }
      if (args.businessUnit) {
        $(`input[name="businessUnit"][value="${args.businessUnit}"]`).prop('checked', true);
      }
    });

    $('#toggleActive').click(function (e) {
      e.preventDefault();
      save();
    });
  }

  function requestedSchema(data) {
    console.log('requestedSchema', JSON.stringify(data));
    if (!data.error) {
      schemaDE = data.schema;
    }

    $('#vucCodeField').empty();
    $('#vucCodeField').append('<option value="">Selecione um campo da Data Extension</option>');

    for (const i in schemaDE) {
      const field = schemaDE[i];
      const { name } = field;
      const { key } = field;

      if (name && key) {
        $('#vucCodeField').append(`<option value="${name}">${name}</option>`);
        dataDE[name] = `{{${key}}}`; // Armazena o formato completo (ex.: {{Event.DEAudience-123.ID}})
      }
    }
  }

  // function extrairUUIDs(data) {
  //   if (!data) return [];

  //   return data
  //     .map(item => {
  //       const match = item.key.match(/DEAudience-([a-f0-9\-]+)/i);

  //       return match ? match[1] : null;
  //     })
  //     .filter(uuid => uuid !== null);
  // }

  function save() {
    const template = $('#template').val();
    const title = $('#title').val();
    const message = $('#message').val();
    const mediaUrl = $('#mediaUrl').val();
    const url = $('#url').val();
    const vucCodeField = $('#vucCodeField').val();
    const brand = $('input[name="businessUnit"]:checked').val();

    if (!template || !title || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.').toUpperCase();
      connection.trigger('updateButton', { button: 'next', enabled: false });

      return;
    }

    console.log(JSON.stringify(dataDE[vucCodeField]));
    console.log(JSON.stringify(dataDE));

    console.log(JSON.stringify(schemaDE));
    console.log(JSON.stringify(vucCodeField));

    // const brand = baseUrl.replace(/.*custom-activity\/([^/]+)\/execute.*/, '$1').toUpperCase();
    // const listVucCode = extrairUUIDs(schemaDE);

    // console.log(JSON.stringify(brand));
    // console.log(JSON.stringify(listVucCode));

    // console.log(
    //   JSON.stringify({
    //     template,
    //     title,
    //     message,
    //     media_url: mediaUrl,
    //     url,
    //     vuc_code: JSON.stringify(listVucCode),
    //     brand: 'DROGASIL',
    //   }),
    // );

    // const vuc_code = JSON.stringify(['5bfef5f3-4651-5774-55c2-aba4c78cf436', '5bfef5f3-4651-5774-55c2-aba4c78cf436']);

    payload.arguments = payload.arguments || {};
    payload.arguments.execute = payload.arguments.execute || {};
    payload.arguments.execute.inArguments = [
      {
        template,
        title,
        message,
        media_url: mediaUrl,
        url,
        vuc_cod: vucCodeField,
        brand: 'DROGASIL',
      },
    ];

    console.log(JSON.stringify(payload));

    // payload.metaData = payload.metaData || {};
    payload.metaData.isConfigured = true;

    connection.trigger('updateActivity', payload);
    console.log('enviou');
  }
});

requirejs.config({
  paths: {
    postmonger: 'postmonger',
  },
  shim: {
    'jquery.min': {
      exports: '$',
    },
    './customActivity': {
      deps: ['jquery.min', 'postmonger'],
    },
  },
});

requirejs(['jquery.min', './customActivity'], function ($, customEvent) {
  $('#notificationForm').on('submit', function (event) {
    const titleInput = $('#title');
    const titleValue = titleValue ? titleInput.val().trim() : '';

    if (titleValue.length > 0 && titleValue[0] !== titleValue[0].toUpperCase()) {
      titleInput[0].setCustomValidity('A primeira letra do título deve ser maiúscula.');
      titleInput[0].reportValidity();
      event.preventDefault();
    } else {
      titleInput[0].setCustomValidity('');
    }

    const mediaUrl = mediaUrl ? $('#mediaUrl').val().trim() : '';

    if (mediaUrl && !mediaUrl.startsWith('https://')) {
      $('#mediaUrl')[0].setCustomValidity('A URL deve começar com https://');
      $('#mediaUrl')[0].reportValidity();
      event.preventDefault();
    }

    const navigationUrl = navigationUrl ? $('#navigationUrl').val().trim() : '';

    if (navigationUrl && !navigationUrl.startsWith('https://')) {
      $('#navigationUrl')[0].setCustomValidity('A URL deve começar com https://');
      $('#navigationUrl')[0].reportValidity();
      event.preventDefault();
    }
  });

  $('#mediaUrl').on('input', function () {
    const mediaUrl = $(this).val();
    const mediaPreview = $('#mediaPreview');
    const mediaPreviewContainer = $('#mediaPreviewContainer');

    if (mediaUrl && mediaUrl.startsWith('https://')) {
      mediaPreview.attr('src', mediaUrl);
      mediaPreviewContainer.show();
    } else {
      mediaPreviewContainer.hide();
    }
  });

  $('#mediaUrl').on('mouseenter', function () {
    const mediaUrl = $(this).val();

    if (mediaUrl && mediaUrl.startsWith('https://')) {
      $('#mediaPreview').attr('src', mediaUrl);
      $('#mediaPreviewContainer').show();
    }
  });

  $('#mediaUrl').on('mouseleave', function () {
    $('#mediaPreviewContainer').hide();
  });
});

requirejs.onError = function (err) {
  throw err;
};

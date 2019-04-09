const defaultFunc = () => {};
export default class CloudinaryWidget {
  constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, cropping = false) {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      uploadPreset: 'xdvl8frf',
      cropping,
      croppingAspectRatio: cropping ? 1 : null,
      croppingDefaultSelectionRatio: 0.8,
      resourceType: 'image',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
      maxImageWidth: 500,
      maxImageHeight: 500,
      sources: ['local', 'camera', 'facebook', 'instagram'],
      styles: {
        palette: {
          window: '#FFFFFF',
          sourceBg: '#FBFBFB',
          windowBorder: '#66008C',
          tabIcon: '#000000',
          inactiveTabIcon: '#0D2F5A',
          menuIcons: '#555a5f',
          link: '#66008C',
          action: '#339933',
          inProgress: '#0433ff',
          complete: '#339933',
          error: '#cc0000',
          textDark: '#000000',
          textLight: '#FFFFFF'
        },
      }
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        return handleSuccess(result.info.secure_url);
      }
      handleFailure();
    });
  }

  open() {
    this.widget.open();
  }
}

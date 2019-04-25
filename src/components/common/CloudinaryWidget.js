const defaultFunc = () => { };
const styles = {
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
};
/**
 * Represents the Cloudinary widget
 * @export
 * @class CloudinaryWidget
 */
export default class CloudinaryWidget {
  /**
   *Creates an instance of CloudinaryWidget.
   * @param {Function} [handleSuccess=defaultFunc] The callback to execute on successful upload
   * @param {Function} [handleFailure=defaultFunc] The callback to execute on failed upload
   * @param {boolean} [cropping=false] If the widget should enforce cropping
   * @memberof CloudinaryWidget
   */
  constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, ratio = 1) {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      uploadPreset: 'ml_default',
      cropping: true,
      croppingAspectRatio: ratio,
      croppingDefaultSelectionRatio: 0.8,
      resourceType: 'image',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
      maxImageWidth: 500,
      maxImageHeight: 500,
      styles,
      sources: ['local', 'camera', 'facebook', 'instagram'],
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        return handleSuccess(result.info.secure_url);
      }
      handleFailure();
    });
  }

  /**
   * Shows the widget
   * @memberof CloudinaryWidget
   * @returns {void}
   */
  open() {
    this.widget.open();
  }
}

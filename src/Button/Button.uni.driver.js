import { buttonNextDriverFactory } from 'wix-ui-core/drivers/unidriver';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import styles from './Button.st.css';

export const buttonDriverFactory = base => {
  const buttonNextDriver = buttonNextDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /** Returns button text */
    getButtonTextContent: buttonNextDriver.getButtonTextContent,

    /** Returns true if the button is focused */
    isFocused: buttonNextDriver.isFocused,

    /** Returns true if the button is disabled */
    isButtonDisabled: buttonNextDriver.isButtonDisabled,

    /** Returns true if the Button was configured with given skin */
    hasSkin: skinName => base.hasClass(styles[skinName]),
  };
};

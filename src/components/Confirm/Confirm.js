import * as React from 'react';
import { Dialog } from '@reach/dialog';
import cx from 'classnames';

import styles from './Confirm.module.scss';

export default class Confirm extends React.Component {
  state = {
    open: false,
    callback: null
  };

  show = callback => event => {
    event.preventDefault();

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    };

    this.setState({
      open: true,
      callback: () => callback(event)
    });
  };

  hide = () => this.setState({ open: false, callback: null });

  confirm = () => {
    this.state.callback();
    this.hide();
  };

  render() {
    return (
      <>
        {this.props.children(this.show)}

        {this.state.open && (
          <Dialog aria-label="delete confirmation" id={styles.ConfirmDialog}>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>

            <div className={styles.buttonGroup}>
              <button className={styles.cancelButton} onClick={this.hide}>
                <p className="buttonText">Cancel</p>
              </button>
              <button className={styles.confirmButton} onClick={this.confirm}>
                <p className={cx(styles.deleteText, 'buttonText')}>Delete</p>
              </button>
            </div>
          </Dialog>
        )}
      </>
    );
  }
}

import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import addACoupon from '../media/images/add-a-coupon.jpg'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

class CouponForm extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <form
        style={{ marginTop: 8 }}
        autoComplete="off"
        onSubmit={e => {
          this.props.createCoupon(e)
        }}
      >
        <TextField
          label="Category"
          value={this.props.coupon.category}
          onChange={e => {
            this.props.onChange('category', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Store Name"
          value={this.props.coupon.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
          multiline
        />
        <TextField
          label="Description"
          value={this.props.coupon.description}
          onChange={e => {
            this.props.onChange('description', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
          multiline
        />
        <TextField
          label="Deal"
          value={this.props.coupon.deal}
          onChange={e => {
            this.props.onChange('deal', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Expiration Date"
          value={this.props.coupon.expirationDate}
          onChange={e => {
            this.props.onChange('expirationDate', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <button
          type="submit"
          style={{ border: 0, background: 'none' }}
          className="fab-button"
          // disabled={this.props.isActive}
        >
          <img src={addACoupon} style={{ width: 'auto', height: '70px' }} />
        </button>
      </form>
    )
  }
}

export default withStyles(styles)(CouponForm)
Ext.define('Overrides.form.field.Checkbox', {
    override	  : 'Ext.form.field.Checkbox',
    inputValue    : 1,
    uncheckedValue: 0,

    getValue: function() {
        return this.getSubmitValue();
    }
});
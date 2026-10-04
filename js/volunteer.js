/* ==========================================================================
   HomeFur All — volunteer.js
   --------------------------------------------------------------------------
   1. Populate shelters select dropdown dynamically from shelters-list.js
   2. Donation custom amount toggle
   3. Checkbox group requirement validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- 1. Dynamic Shelters Populate ---- */
  const shelterSelect = document.getElementById('v-shelter');
  if (shelterSelect && typeof shelters !== 'undefined') {
    shelters.forEach(s => {
      const option = document.createElement('option');
      option.value = s.name;
      option.textContent = `${s.name} (${s.city}, ${s.province})`;
      shelterSelect.appendChild(option);
    });
  }

  /* ---- 2. Donation Custom Amount Toggle ---- */
  const amountRadios = document.querySelectorAll('input[name="amount"]');
  const customAmountField = document.getElementById('custom-amount-field');
  const customAmountInput = document.getElementById('custom-amount');

  amountRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'custom') {
        customAmountField.hidden = false;
        customAmountInput.required = true;
        customAmountInput.focus();
      } else {
        customAmountField.hidden = true;
        customAmountInput.required = false;
        customAmountInput.value = '';
      }
    });
  });

  /* ---- 3. Checkbox Group Validation ---- */
  const volunteerForm = document.getElementById('volunteer-form');
  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      const groups = volunteerForm.querySelectorAll('.check-group[data-require-one]');
      let isValid = true;

      groups.forEach(group => {
        const checked = group.querySelectorAll('input[type="checkbox"]:checked');
        const errorMsg = group.querySelector('.form-error');

        if (checked.length === 0) {
          isValid = false;
          if (errorMsg) errorMsg.hidden = false;
        } else {
          if (errorMsg) errorMsg.hidden = true;
        }
      });

      if (!isValid) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
});
/* ==========================================================================
   HomeFur All — volunteer.js
   --------------------------------------------------------------------------
   1. Populate shelters select dropdown dynamically from shelters-list.js
   2. Donation custom amount toggle
   3. Checkbox group requirement validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- 1. Dynamic Shelters Populate ---- */
  const volunteerSelect = document.getElementById('v-shelter');
  const donationSelect = document.getElementById('d-shelter');

  if (typeof shelters !== 'undefined') {
    shelters.forEach(s => {
        const optionText = `${s.name} (${s.city}, ${s.province})`;

        if (volunteerSelect) {
            const opt = document.createElement('option');
            opt.value = s.name;
            opt.textContent = optionText;
            volunteerSelect.appendChild(opt);
        }

        if (donationSelect) {
            const opt = document.createElement('option');
            opt.value = s.name;
            opt.textContent = optionText;
            donationSelect.appendChild(opt);
        }
    });
  };

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
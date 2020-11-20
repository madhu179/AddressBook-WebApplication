window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
  });

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>Email</th>
    `;
    let contactList = createContactJSON();
    if(contactList.length == 0) return;
    document.querySelector(".person-count").textContent = contactList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._firstName}${contactData._lastName}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phone}</td>
        <td>${contactData._email}</td>
        <td>
        <img name="${contactData._id}" onclick="removie(this)" alt="delete" 
                src="../assets/icons/delete-black-18dp.svg">
        <img name="${contactData._id}" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const createContactJSON = () => {
    let contactListLocal = [
    {
        _firstName: "Anthony",
        _lastName: "Stark",
        _address: "10001 Malibu Point",
        _city: "New York City",
        _email: "tonystark@gmail.com",
        _phone: "9876543210",
        _state: "New York",
        _zip: "10002",
    },
    {
        _firstName: "Steve",
        _lastName: "Rogers",
        _address: "569 Leaman Place Brooklyn Heights",
        _city: "New York City",
        _email: "steverogers@Outlook.com",
        _phone: "4567876576",
        _state: "New York",
        _zip: "53540",
    }
    ];
    return contactListLocal;
  }
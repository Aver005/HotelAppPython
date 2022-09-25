const admins_list = document.getElementById("admins-list");
const admin_profile = admins_list.innerHTML;
let admins = 1;

const add_new_admin = () =>
{
    const placeholder = document.createElement("div");
    placeholder.innerHTML = admin_profile.replaceAll('"admin"', '"admin' + admins + '"');;
    const new_admin_profile = placeholder.firstElementChild;
    admins_list.appendChild(new_admin_profile);
    admins++;
}

const remove_admin = (e) =>
{
    let profile = e.parentNode;
    if (profile.id === "admin") {return;}
    admins_list.removeChild(profile)
}

const create_hotel = () =>
{

}
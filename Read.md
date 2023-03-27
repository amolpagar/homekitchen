Entities

1. Cutomer
    name
    email
    phones 
    addresses

2. Chef
    name
    email
    phones 
    addresses

3. Admin

4. Orders

5. delivery
    name
    email
    phones 
    addresses


6. payment

7. reviews

8. kitchen
    schedule - start/end  weekdays
    name
    address
    contact
    Menu

9. Menu
    kitchenId
    item name
    item photo
    calories
    price
    isAvailable
    available_quantity
    description
    spice_level


10. 

CHEF APIs

/v1/chef/kitchen : POST
/v1/chef/kitchen/:kitchen_id : PUT
/v1/chef/kitchen/:kitchen_id : GET
/v1/chef/kitchen/:kitchen_id : DELETE

/v1/chef/kitchen/:kitchen_id/menu : POST      {BODY}
/v1/chef/kitchen/:kitchen_id/menu/:menu_id : PUT    {BODY} 
/v1/chef/kitchen/:kitchen_id/menu/:menu_id : GET
/v1/chef/kitchen/:kitchen_id/menu/:menu_id : DELETE  








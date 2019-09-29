def ground_shipping(weight):
  if weight <= 2:
    cost = (weight * 1.50) + 20.00
    return cost
  elif weight > 2 and weight <= 6:
    cost = (weight * 3.00) + 20.00
    return cost
  elif weight > 6 and weight <= 10:
    cost = (weight * 4.00) + 20.00
    return cost
  elif weight > 10:
    cost = (weight * 4.75) + 20.00
    return cost
  else:
    return "That's an invalid weight."
  
premium_shipping = 125.00

def drone_shipping(weight):
  if weight <= 2:
    cost = (weight * 4.50)
    return cost
  elif weight > 2 and weight <= 6:
    cost = (weight * 9.00)
    return cost
  elif weight > 6 and weight <= 10:
    cost = (weight * 12.00)
    return cost
  elif weight > 10:
    cost = (weight * 14.25)
    return cost
  else:
    return "That's an invalid weight."
  
def best_shipping_option(weight):
  if weight > 10:
    cost = premium_shipping
    print("Premium shipping is your best option. " + "It would cost $" +str(cost)+ " to ship " +str(weight)+ " lbs.")
  elif weight < 2:
    print("Drone shipping is the best option. " + "It would cost $" +str(drone_shipping(weight))+ " to ship " +str(weight)+ " lbs.")
  else:
    print("Ground shipping is the best option." + "It would cost $" +str(ground_shipping(weight))+ " to ship " +str(weight)+ " lbs." )
    
best_shipping_option(1)
# Problem breakdown

## User stories
```
User story 1: Land plane
------------------------
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

Object | Messages
--------------- | --------------------
Plane | land
Airport | landPlane



User story 2: Take-off
----------------------
As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

Object | Messages
--------------- | --------------------
Plane | land
Plane | takeOff
Airport | landPlane
Airport | launchPlane



User story 3: Prevent take-off if stormy
----------------------------------------
As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

Object | Messages
--------------- | --------------------
Plane | land
Plane | takeOff
Airport | landPlane
Airport | launchPlane
Weather | isStormy

1. Weather to respond to isStormy
2. If isStormy -> prevent plane.takeOff()
3. If isStormy -> prevent plane.land()


User story 4: Prevent landing if stormy
---------------------------------------
As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 



As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
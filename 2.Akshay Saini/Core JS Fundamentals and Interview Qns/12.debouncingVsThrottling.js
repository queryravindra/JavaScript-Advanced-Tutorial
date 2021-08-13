/*

@Akshay Saini Debouncing will be suited for shooter games because user can stop shooting at any time, 
regardless of interval you have set and he can fire at any time so.. we should allow player to fire shot at any time 
unlike throttling fixed synchronous intervals shots will be delayed if your fire is not in sync with throttle intervals. 
My implementation would be the inverse of debouncing like count time in ms after any shot and then allow 
next shot after 200 ms for a pistol, i.e. block for 200ms whenever fired!!

A debounced function may starve, but a throttled function would never.


from JS engine's perspective
throttling: I am working on something which might take x milliseconds, so don't disturb me for next x milliseconds
debouncing: first you finish your action (typing, clicking) & then after x milliseconds I will fetch the required data

*/
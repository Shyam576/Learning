/*
    Wreite a class that allows gettting and setting key-value pairs, howevera time until expirationis associated with cache key.
    The classs have three public methods:
    -set(key,value,duration) : accepts an integer key, and integer value, and a duration iin millisceonds. 
        Onece the duration has elaspsed, the key should be inaccessible. The method should return true if the same un-expired key already exists 
        and false otherwise. Both the value and duration should be overwrtiten if the key already exists.
    
    -get(key) : if an un-expired key exists, it should return the assocciated value.  Otherwise it shoudl return -1

    -count() : returns the count of un-expired keys.
*/

// Solution
 class TimeLimitedCache{
    constructor(){
        this.cache = new Map()
        this.timeout = new Map()
    }

    set(key, value, duration){
        let keyExists = this.cache.has(key)

        if(keyExists){
            clearTimeout(this.timeout.get(key))
        }

        this.cache.set(key, value)
        this.timeout.set(key, setTimeout(()=> this.cache.delete(key), duration))

        return keyExists;
    }
    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key)
        }

        return -1;
    }

    count(){
        return this.cache.size;
    }
    
 }

 // Expert Solution
 class TimeLimitedCache {
    cache = {}
    set(key, value, duration) {

        
        if (this.cache[key]) {
            clearTimeout(this.cache[key].timeout)
            const timeout = setTimeout(() => {
                delete this.cache[key]
            }, duration)
            this.cache[key] = {value, timeout}
            return true
        } else {
            const timeout = setTimeout(() => {
                delete this.cache[key]
            }, duration)
            this.cache[key] = {value, timeout}
            return false
        }
    }
    get(key) {
        return this.cache[key] ? this.cache[key].value : -1
    }
    count() {return Object.keys(this.cache).length}
};
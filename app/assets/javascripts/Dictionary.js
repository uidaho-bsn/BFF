/*
 * Dictionary Factory Object
 * Holds common object functions. similar to V-Table
 * this.New() used to create new dictionary objects
 * Uses Object.defineProperties so won't work on older browsers.
 * Browser Compatibility 
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
 *      Firefox (Gecko) 4.0 (2), Chrome 5, IE 9, Opera 11.60, Safari 5
 */
function Dict() {
 
    /*
     * Create a new Dictionary
     */
    this.New = function () {
        return new dict();
    };
 
    /*
     * Return argument f if it is a function otherwise return undefined
     */
    function ensureF(f) {
        if (isFunct(f)) {
            return f;
        }
    }
 
    function isFunct(f) {
        return (typeof f == "function");
    }
 
    /*
     * Add a "_" as first character just to be sure valid property name
     */
    function makeKey(k) {
        return "_" + k;
    };
 
    /*
     * Key Value Pair object - held in array
     */
    function newkvp(key, value) {
        return {
            key: key,
		value: value,
		toString: function () { return this.key; },
		valueOf: function () { return this.key; }
        };
    };
 
    /*
     * Return the current set of keys. 
     */
    function keys(a) {
        // remove the leading "-" character from the keys
        return a.map(function (e) { return e.key.substr(1); });
        // Alternative: Requires Opera 12 vs. 11.60
        // -- Must pass the internal object instead of the array
        // -- Still need to remove the leading "-" to return user key values
        //    Object.keys(o).map(function (e) { return e.key.substr(1); });
    };
 
    /*
     * Return the current set of values. 
     */
    function values(a) {
        return a.map(function(e) { return e.value; } );
    };
 
    /*
     * Return the current set of key value pairs. 
     */
    function kvPs(a) {
        // remove the leading "-" character from the keys
        return a.map(function (e) { return newkvp(e.key.substr(1), e.value); });
    }
 
    /*
     * Returns true if key exists in the dictionary.
     * k - Key to check (with the leading "_" character) 
     */
    function exists(k, o) {
        return o.hasOwnProperty(k);
    }
 
    /*
     * Array Map implementation
     */
    function map(a, f) {
        if (!isFunct(f)) { return; }
        return a.map(function (e, i) { return f(e.value, i); });
    }
 
    /*
     * Array Every implementation
     */
    function every(a, f) {
        if (!isFunct(f)) { return; }
        return a.every(function (e, i) { return f(e.value, i) });
    }
 
    /*
     * Returns subset of "values" where function "f" returns true for the "value"
     */
    function filter(a, f) {
        if (!isFunct(f)) {return; }
        var ret = a.filter(function (e, i) { return f(e.value, i); });
        // if anything returned by array.filter, then get the "values" from the key value pairs
        if (ret && ret.length > 0) {
            ret = values(ret);
        }
        return ret;
    }
 
    /*
     * Array Reverse implementation
     */
    function reverse(a, o) {
        a.reverse();
        reindex(a, o, 0);
    }
 
    /**
     * Randomize array element order in-place.
     * Using Fisher-Yates shuffle algorithm.
     */
    function shuffle(a, o) {
        var j, t;
        for (var i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        reindex(a, o, 0);
        return a;
    }
    /*
     * Array Some implementation
     */
    function some(a, f) {
        if (!isFunct(f)) { return; }
        return a.some(function (e, i) { return f(e.value, i) });
    }
 
    /*
     * Sort the dictionary. Sorts the array and reindexes the object.
     * a - dictionary array
     * o - dictionary object
     * sf - dictionary default sort function (can be undefined)
     * f - sort method sort function argument (can be undefined)
     */
    function sort(a, o, sf, f) {
        var sf1 = f || sf; // sort function  method used if not undefined
        // if there is a customer sort function, use it
        if (isFunct(sf1)) {
            a.sort(function (e1, e2) { return sf1(e1.value, e2.value); });
        }
        else {
            // sort by key values
            a.sort();
        }
        // reindex - adds O(n) to perf
        reindex(a, o, 0);
        // return sorted values (not entire array)
        // adds O(n) to perf
        return values(a);
    };
 
    /*
     * forEach iteration of "values"
     *   uses "for" loop to allow exiting iteration when function returns true 
     */
    function forEach(a, f) {
        if (!isFunct(f)) { return; }
        // use for loop to allow exiting early and not iterating all items
        for(var i = 0; i < a.length; i++) {
            if (f(a[i].value, i)) { break; }
        }
    };
 
    /*
     * forEachR iteration of "values" in reverse order
     *   uses "for" loop to allow exiting iteration when function returns true 
     */
    function forEachR(a, f) {
        if (!isFunct(f)) { return; }
        // use for loop to allow exiting early and not iterating all items
        for (var i = a.length - 1; i > -1; i--) {
            if (f(a[i].value, i)) { break; }
        }
    }
 
    /*
     * Add a new Key Value Pair, or update the value of an existing key value pair
     */
    function add(key, value, a, o, resort, sf) {
        var k = makeKey(key);
        // Update value if key exists
        if (exists(k, o)) {
            a[o[k]].value = value;
        }
        else {
            // Add a new Key value Pair
            var kvp = newkvp(k, value);
            o[kvp.key] = a.length;
            a.push(kvp);
        }
        // resort if requested
        if (resort) { sort(a, o, sf); }
    };
 
    /*
     * Removes an existing key value pair and returns the 
     * "value" If the key does not exists, returns undefined
     */
    function remove(key, a, o) {
        var k = makeKey(key);
        // return undefined if the key does not exist
        if (!exists(k, o)) { return; }
        // get the array index
        var i = o[k];
        // get the key value pair
        var ret = a[i];
        // remove the array element
        a.splice(i, 1);
        // remove the object property
        delete o[k];
        // reindex the object properties from the remove element to end of the array
        reindex(a, o, i);
        // return the removed value
        return ret.value;
    };
 
    /*
     * Returns true if key exists in the dictionary.
     * k - Key to check (without the leading "_" character) 
     */
    function keyExists(k, o) {
        return exists(makeKey(k), o);
    };
 
    /*
     * Returns value assocated with "key". Returns undefined if key not found
     */
    function item(key, a, o) {
        var k = makeKey(key);
        if (exists(k, o)) {
            return a[o[k]].value;
        }
    }
 
    /*
     * changes index values held by object properties to match the array index location
     * Called after sorting or removing
     */
    function reindex(a, o, i){
        for (var j = i; j < a.length; j++) {
            o[a[j].key] = j;
        }
    }
 
    /*
     * The "real dictionary"
     */
    function dict() {
        var _a = [];
        var _o = {};
        var _sortF;
 
        Object.defineProperties(this, {
		"length": { get: function () { return _a.length; }, enumerable: true },
		    "keys": { get: function() { return keys(_a); }, enumerable: true },
			"values": { get: function() { return values(_a); }, enumerable: true },
			    "keyValuePairs": { get: function() { return kvPs(_a); }, enumerable: true},
				"sortFunction": { get: function() { return _sortF; }, 
					set: function(funct) { _sortF = ensureF(funct); }, enumerable: true }
	    });
 
        // Array Methods - Only modification to not 
        // pass the actual array to the callback function
        this.map = function(funct) { return map(_a, funct); };
        this.every = function(funct) { return every(_a, funct); };
        this.filter = function(funct) { return filter(_a, funct); };
        this.reverse = function() { reverse(_a, _o); };
        this.shuffle = function () { return shuffle(_a, _o); };
        this.some = function(funct) { return some(_a, funct); };
        this.sort = function(funct) { return sort(_a, _o, _sortF, funct); };
 
        // Array Methods - Modified aborts when funct returns true.
        this.forEach = function (funct) { forEach(_a, funct) };
 
        // forEach in reverse order
        this.forEachRev = function (funct) { forEachR(_a, funct) };
 
        // Dictionary Methods
        this.addOrUpdate = function(key, value, resort) 
	    { return add(key, value, _a, _o, resort, _sortF); };
        this.remove = function(key) { return remove(key, _a, _o); };
        this.exists = function(key) { return keyExists(key, _o); };
        this.item = function(key) { return item(key, _a, _o); };
        this.get = function (index) 
	    { if (index > -1 && index < _a.length) { return _a[index].value; } } ,
	    this.clear = function() { _a = []; _o = {}; };
 
	    return this;
    }
 
 
    return this;
}
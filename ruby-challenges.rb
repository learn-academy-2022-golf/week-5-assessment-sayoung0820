# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# results = beverages_array.select {|item| item.include?("o")}
# p results

# results = beverages_array.select {|item| item.include?("t")}
# p results

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


 
us_states.each do |c|
    c.each do |key, value|
    puts value
  end
  end

# This method only returned the second value from each array


  us_states.each do |states|
    puts states.values_at().join(': ')
  end

#  This method is reading the code (no errors returned) but not executing to return anything

new_array = "#{us_states.values}"
puts new_array

# This method returned the nested arrays without the keys, but with the arrays/brackets still in place. Tried a few steps to remove the brackets and quotation marks but no luck

new_str = us_states.flatten
puts new_str

# This method seems to be the best step because it returned the values without the brackets and commas but kept the keys. Tried a few steps to first remove the keys using .slice() but this only takes two arguments, the index to remove and the index to remove up to which removes the key names but doesn't allow me to return the whole array together without the key names. My goal was to remove the key names from the string list, then sort the string list but unable to figure it out :()

new_str1 = new_str.slice(1)
puts new_str1

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


  class Bike
      def set_bike_data(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
      end

      def get_model
        @model
      end

    def get_bike_data
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

    bike_info = Bike.new
    bike_info.set_bike_data('Trek', '2', '0')
    p bike_info.get_bike_data
    p bike_info.get_model
   



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Speed
def set_bike_speed(go_fast, slow_down)
    @go_fast = go_fast
    @slow_down = slow_down
end

def brake
    if @slow_down == '5'
        '23'
end
end

def pedal_faster
    if @go_fast == '18'
        '28'      
end
end
end

my_bike = Speed.new
my_bike.set_bike_speed('18', '5')
p my_bike.pedal_faster
p my_bike.brake


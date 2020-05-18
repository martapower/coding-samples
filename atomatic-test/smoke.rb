require "watir"
require "pry"
#gem "chromedriver-helper"

dni = "62185916B"
mobile = '622292956'
email = 'mmoreno@digitalorigin.com'

browser = Watir::Browser.new :firefox
browser.goto "URL#"

browser.text_field(id: 'account_id').set 'tk_a94187e45df6ac52fe8fb243'
browser.text_field(id: 'key').set '721f45dfafbfc716'
browser.link(xpath: '//*[@id="paylater_form"]/a').click
sleep 4
browser.span(xpath: '//*[@id="divId"]/div[1]/div/div/div/span').click

browser.text_field(id: 'dni').set dni
browser.text_field(id: 'amount').set '12000'
browser.text_field(name: 'full_name').set 'Marcos Desinger'
browser.text_field(name: 'email').set email
browser.execute_script("window.scrollBy(0,600)")
browser.text_field(id: 'mobile-phone').set mobile
browser.text_field(id: 'address[street]').set 'Calle Berlin 234'
browser.text_field(id: 'address[city]').set 'Barcelona'
browser.text_field(id: 'address[zipcode]').set '08024'
browser.button(xpath: '//*[@id="paylater_form"]/div[4]/div/button').click
binding.pry
sleep 5
browser.button(id: 'sg-notification-global-trigger').click
sleep 3
browser.execute_script("window.scrollBy(0,600)")
browser.span(class: "Form-checkboxSkin").click
browser.button(id: 'FlexibleForm-submitButton').click
sleep 3
#browser.text_field(id: "dni").set dni
browser.select(name: "dob-day").select_value("1")
browser.select(name: "dob-month").select_value("1")
browser.select(name: "dob-year").select_value("1990")
browser.select(id: "request_working_status").select_value("employed")
browser.button(id: 'FlexibleForm-submitButton').click
sleep 3
browser.iframe(id: 'hosted-field-number')
	   .text_field(id: 'credit-card-number').set "4507670001000009"
browser.iframe(id: 'hosted-field-name')
       .text_field(id: "name").set "Vero Flores"
browser.iframe(id: 'hosted-field-expirationDate')
	   .text_field(id: "expiration").set "12/18"
browser.iframe(id: 'hosted-field-cvv')
	   .text_field(id: "cvv").set "989"
browser.span(class: 'Form-checkboxSkin').click
browser.button(id: "FlexibleForm-submitButton").click

sleep 2

Watir::Wait.until{ browser.div(class: "request-messageSuccess").exists? }

puts "This is the end of the test"

require 'watir'
require 'pry'

dni = '20273203Z'
mobile = '666560108'
email = 'vflores+prod108@digitalorigin.com'
merchant_tk = 'tk_a94187e45df6ac52fe8fb243'
secret = '721f45dfafbfc716'
number_card = '4507670001000009'
name_for_card = 'Vero Flores'
exp_date = '12/18'
cvv = '989'

puts 'Creating loan using old flow (ref id)'
puts 'The customer is also new for the platform'

browser = Watir::Browser.new :firefox
browser.goto 'URL#'

browser.text_field(id: 'account_id').set merchant_tk
browser.text_field(id: 'key').set secret
browser.link(xpath: '//*[@id="paylater_form"]/a').click
sleep 2
browser.span(xpath: '//*[@id="divId"]/div[1]/div/div/div/span').click
browser.text_field(id: 'dni').set dni
browser.text_field(id: 'amount').set '12000'
browser.text_field(name: 'full_name').set 'Veronica Flores Flores'
browser.text_field(name: 'email').set email
browser.execute_script("window.scrollBy(0,600)")
browser.text_field(id: 'mobile-phone').set mobile
browser.text_field(id: 'address[street]').set 'Calle Berlin 234'
browser.text_field(id: 'address[city]').set 'Barcelona'
browser.text_field(id: 'address[zipcode]').set '08024'
browser.button(xpath: '//*[@id="paylater_form"]/div[4]/div/button').click
sleep 5
browser.button(id: 'sg-notification-global-trigger').click
sleep 3
browser.button(name: 'minusButton').click
browser.execute_script("window.scrollBy(0,600)")
browser.span(class: 'Form-checkboxSkin').click
browser.button(id: 'FlexibleForm-submitButton').click
sleep 3
browser.select(name: 'dob-day').select('1')
browser.select(name: 'dob-month').select('1')
browser.select(name: 'dob-year').select('1990')
browser.select(id: 'request_working_status').select('employed')
browser.button(id: 'FlexibleForm-submitButton').click
sleep 3
browser.iframe(id: 'hosted-field-number').text_field(id: 'credit-card-number').set number_card
browser.iframe(id: 'hosted-field-name').text_field(id: 'name').set name_for_card
browser.iframe(id: 'hosted-field-expirationDate').text_field(id: 'expiration').set exp_date
browser.iframe(id: 'hosted-field-cvv').text_field(id: 'cvv').set cvv
browser.span(class: 'Form-checkboxSkin').click
browser.button(id: 'FlexibleForm-submitButton').click
sleep 2
Watir::Wait.until { browser.div(class: 'request-messageSuccess').exists? }
puts 'Loan should be created'
browser.close

puts 'Now customer accesses to CBO'

browser = Watir::Browser.new :firefox
browser.goto 'https://pagamastarde.com/mi_cuenta/login?testing=true'
Watir::Wait.until { browser.div(class: 'LoginForm').visible? }
browser.text_field(name: 'username').set dni
browser.text_field(name: 'password').set mobile[-4..-1]
browser.button(class: 'Button').click
sleep 2
puts 'Customer should be logged'
puts 'Customer wants to pay an installment'
browser.link(class: 'HeaderNav-tabLink--loans').click
sleep 2
browser.button(xpath: '//*[@id="site"]/section/div/div/div[2]/div[3]/button').click
sleep 2
browser.div(id: 'PayNowContent').wait_until_present
browser.button(xpath: '//*[@id="PayNowContent"]/form/div/button').click
sleep 2
Watir::Wait.until { browser.text.include?('El pago de tu cuota ha sido realizado con éxito.') }
puts 'Customer should pay the installment'
browser.link(xpath: '/html/body/div[1]/div/div/div/div/div/div[1]/header/div/nav/div/ul[1]/li[2]/a').click
sleep 2
browser.link(id: 'deleteAccountLink').click
sleep 2
browser.button(xpath: '/html/body/div[6]/div[2]/section/div[2]/div/div[1]/button').click
sleep 2
puts 'Customer should delete its account'

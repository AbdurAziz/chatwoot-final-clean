FactoryBot.define do
  factory :captain_assistant, class: 'AIAgent::Assistant' do
    sequence(:name) { |n| "Assistant #{n}" }
    description { 'Test description' }
    association :account
  end
end

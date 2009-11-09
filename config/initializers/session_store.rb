# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_519Productions_session',
  :secret      => '0c79460db330458e25c03f5356a88d18d3b13ccae986351710ea96a1e949d8ce2a73decd02802cc90d8a9a0268b9b379be2de16af2b6953554853032b84a4cb4'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store

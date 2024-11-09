import time
from time import sleep

# Dataframe stuff
import pandas as pd

# Random integer for more realistic timing for clicks, buttons and searches during scraping
from random import randint

import selenium

from selenium import webdriver

# Starting/Stopping Driver: can specify ports or location but not remote access
from selenium.webdriver.chrome.service import Service as ChromeService

# Manages Binaries needed for WebDriver without installing anything directly
from webdriver_manager.chrome import ChromeDriverManager

# Allows searchs similar to beautiful soup: find_all
from selenium.webdriver.common.by import By

# Try to establish wait times for the page to load
from selenium.webdriver.support.ui import WebDriverWait

# Wait for specific condition based on defined task: web elements, boolean are examples
from selenium.webdriver.support import expected_conditions as EC

# Used for keyboard movements, up/down, left/right,delete, etc
from selenium.webdriver.common.keys import Keys

# Locate elements on page and throw error if they do not exist
from selenium.common.exceptions import NoSuchElementException


option = webdriver.ChromeOptions()

option.add_argument("--incognito")

# Define job and location search keywords
job_search_keyword = ["Medical+Assistant"]

# Define Locations of Interest
location_search_keyword = ["Chicago"]

# Finding location, position, radius=35 miles, sort by date and starting page
paginaton_url = (
    "https://www.indeed.com/jobs?q={}&l={}&radius={}&filter=0&sort=date&start={}"
)

job = "Medical Assistant"
location = "Chicago"
radius = 10

driver = webdriver.Chrome(
    service=ChromeService(ChromeDriverManager().install()), options=option
)

driver.get(paginaton_url.format(job, location, radius, 0))

sleep(randint(2, 6))

p = driver.find_element(By.CLASS_NAME, "jobsearch-JobCountAndSortPane-jobCount").text
characters = [char for char in p]

# Join the first 3 characters into a single string and convert it to an integer
first_three = "".join(characters[:3])
num = int(first_three)

max_iter_pgs = num // 15
print(max_iter_pgs)

job_data = []

for i in range(max_iter_pgs):
    driver.get(paginaton_url.format(job, location, radius, i * 10))

    sleep(randint(2, 4))

    job_page = driver.find_element(By.ID, "mosaic-jobResults")
    jobs = job_page.find_elements(By.CLASS_NAME, "job_seen_beacon")

    for jj in jobs:
        title = jj.find_element(By.CLASS_NAME, "jobTitle").text

        link = (
            jj.find_element(By.CLASS_NAME, "jobTitle")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        # Append the job details to the list
        job_data.append({"Title": title, "Link": link})

print(job_data)

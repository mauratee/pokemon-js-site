from unittest import TestCase
from server import app
import os


class FlaskTestsHomepage(TestCase):
    """Test new user creation route."""

    def setUp(self):
        """Stuff to do before every test: get Flask test client, show errors, 
            set up secret key"""

        self.client = app.test_client()
        app.config['TESTING'] = True
        app.config['SECRET_KEY'] = 'key'

    def test_index(self):
        """Test rendering of homepage."""

        result = self.client.get("/")
        self.assertIn(b"Pokemon", result.data)


    def test_contents(self):
        """Test rendering of contents of homepage after API query."""

        result = self.client.get("/")
        self.assertIn(b"Unown", result.data)







if __name__ == '__main__':
    import unittest

    unittest.main()
